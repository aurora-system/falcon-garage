<template>
    <div class="order">
        <v-form ref="form" :lazy-validation="false">
            <v-container>
                <v-row> 
                    <!-- BASIC ORDER DETAILS -->
                    <v-col class="d-flex">
                         <v-container>
                            <h4>Order Details</h4>
                            <v-row dense >
                                <v-col class="customerName">
                                    <v-text-field :rules="custNameRules" id="customerName" v-model="order.customerName" label="Customer Name" required outlined></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="orderType">
                                    <v-select :rules="orderTypeRules" :items="orderTypes" label="Order Type" v-model="order.type" required outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="remarks">
                                    <v-textarea
                                        outlined
                                        name="remarks"
                                        label="Remarks"
                                        value=""
                                        height="100"
                                        v-model="order.remarks"
                                        ></v-textarea>
                                </v-col>
                            </v-row>

                         </v-container>
                    </v-col>

                    <!-- PRODUCTS SELECTION -->
                    <v-col class="d-flex" cols="12" md="9">
                         <v-container>
                             <h4>Product Selection</h4>
                             <v-row v-for="(input, index) in inputs" v-bind:key="index" dense>
                                 
                                <!-- CATEGORIES -->
                                <v-col cols="12" md="4">
                                    <v-select
                                        @change="getProductsOfCategory(input.category, index)"
                                        :items="productCategories"
                                        name="productCategory"
                                        item-text="name"
                                        item-value="categoryId"
                                        label="Category"
                                        v-model="input.category"
                                        outlined>
                                    </v-select>
                                </v-col>

                                <!--_PRODUCTS -->
                                <v-col cols="12" md="4">
                                    <v-select 
                                        @change=getSubtotalAmount(input.quantity,input.selectedProductId,index)
                                        :items=input.products
                                        name="product" 
                                        item-text="name" 
                                        item-value="_id"
                                        label="Product" 
                                        v-model="input.selectedProductId"
                                        outlined>
                                    </v-select>
                                </v-col>

                                <!-- QUANTITY -->
                                <v-col cols="12" md="1">
                                    <v-text-field 
                                        id="quantity" 
                                        :rules="quantityRules"
                                        @change=getSubtotalAmount(input.quantity,input.selectedProductId,index) 
                                        v-model="input.quantity" 
                                        label="Qty" 
                                        type="number"
                                        min="0"
                                        required 
                                        outlined></v-text-field>
                                </v-col>

                                <!-- SUBTOTAL -->
                                <v-col class="subtotalCost" cols="12" md="2">
                                    <v-alert 
                                        id="subtotal"
                                        text 
                                        color="green" 
                                        icon="mdi-currency-php">{{ input.subtotal }}</v-alert>
                                </v-col>

                                <v-col class="deleteBtn" cols="12" md="1">
                                    <v-icon @click="deleteRow(index)" large>mdi-trash-can-outline</v-icon>
                                </v-col>
                            </v-row>
                            <v-row>
                                <!--<v-icon class="addProductItem" @click="addRow" large color="green">mdi-plus-thick</v-icon>-->
                                <v-col cols="12" md="2">
                                    <div class="addBtn">
                                        <v-btn large color="primary" @click="addRow">Add Item</v-btn>
                                    </div>
                                </v-col>
                              </v-row>

                            <v-row>
                                <v-col cols="12" md="3"><h4>Total Amount: </h4></v-col>
                                <v-col cols="12" md="9">
                                    <v-alert class="totalAmount" text color="green" icon="mdi-currency-php" >{{ totalAmount }}</v-alert>
                                </v-col>
                            </v-row>
                         </v-container>
                    </v-col>
                </v-row>
            
                <v-divider></v-divider>
                
                <v-row>
                    <v-col cols="12" sm="6" md="12">
                        <v-snackbar
                            v-model="snackbar"
                            :bottom="y === 'bottom'"
                            :color="color"
                            :left="x === 'left'"
                            :multi-line="mode === 'multi-line'"
                            :right="x === 'right'"
                            :timeout="timeout"
                            :top="y === 'top'"
                            :vertical="mode === 'vertical'"
                            >
                            {{ text }}
                            <v-btn dark text @click="snackbar=false">
                                Close
                            </v-btn>
                        </v-snackbar>
                        <div class="submitBtn">
                            <v-btn large color="primary" @click="createOrder">Submit</v-btn>
                        </div>

                        <v-dialog v-model="dialog" max-width="290">
                            <v-card>
                                <v-card-title class="headline">Success!</v-card-title>
                                <v-card-text>
                                The order has been saved.
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn color="primary" @click="reloadPage()">
                                    Close
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>                    
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import OrderService from '../../services/OrderService';
    import ProductService from '../../services/ProductService';
    import ProductCategoryService from '../../services/ProductCategoryService';

    export default {
        data () {
            return {
                // Order form data
                totalAmount: 0,
                inputs: [ { products: [], category: '', quantity: '', subtotal: 0, selectedProductId: '' } ],
                order: {
                    orderId: '1',
                    type: '',
                    customerName: '',
                    createdDate: '',
                    totalAmount: 0,
                    remarks: '',
                    products: []
                },
                orderTypes: [ 'sale', 'service'],
                products: [],
                productCategories: [],
                
                // Snackbar data
                color: 'success',
                mode: 'multi-line',
                snackbar: false,
                text: 'You have successfully saved an order.',
                timeout: 5000,
                x: null,
                y: 'top',

                // Dialog
                dialog: false,

                // validation
                custNameRules: [
                    v => !!v || ''
                ],
                orderTypeRules: [
                    v => !!v || ''
                ],
                quantityRules: [
                    v => !!v || ''
                ]

            }
        },
        computed: {

        },
        methods: {
            showAlert () {

            },
            addRow() {
                this.inputs.push({
                    products: [],
                    category: '',
                    quantity: '',
                    subtotal: 0,
                    selectedProductId: ''
                })
            },
            deleteRow(index) {
                var inputItem = this.inputs[index];
                if (inputItem.subtotal != null) {
                    this.totalAmount = this.totalAmount - inputItem.subtotal;
                }
                this.inputs.splice(index,1);
            },
            reloadPage () {
                this.snackbar = false;
                this.dialog = false;
                document.location.reload(true);
            },
            /*getTotalAmount () {
                var totalAmount = 0;
                console.log("In getTotalAmount - length: " + this.inputs.length);
                for (var input in this.inputs) {
                    console.log("Input subtotal: " + input.subtotal);
                    if (input.subtotal != undefined) {
                        totalAmount = totalAmount + input.subtotal;
                    }
                }
                return totalAmount;
            },*/

            async getSubtotalAmount (qty, id, index) {
                
                var inputItem = this.inputs[index];
                inputItem.selectedProduct = id;

                var product = await ProductService.getProductById(id);
                inputItem.quantity = qty;
                inputItem.subtotal = qty*product.srp;

                // Update the total amount
                this.totalAmount = 0;
                for (var i = 0; i < this.inputs.length; i++) {
                    if (this.inputs[i].subtotal != null) {
                        this.totalAmount = this.totalAmount + this.inputs[i].subtotal;
                        this.order.totalAmount = this.totalAmount;
                    }
                }
            },
            async getProductsOfCategory (categoryId, index) {
                var inputItem = this.inputs[index];
                inputItem.products = await ProductService.getProductsOfCategory(categoryId);
            },
            async createOrder () {
                console.log("In create order method.");
                this.$refs.form.validate();
                
                try {
                    var orderToInsert = this.order;
                    
                    for (var i = 0; i < this.inputs.length; i++) {
                        console.log("Name of the selected product: " + this.inputs[i].selectedProductId);

                        if (this.inputs[i].selectedProductId == '') {
                            this.snackbar = true;
                            this.color = 'error';
                            this.text = "You did not select a product."
                            return;
                        }

                        var product = await ProductService.getProductById(this.inputs[i].selectedProductId);
                        orderToInsert.products.push(product);
                    }

                    this.orders = await OrderService.insertOrder(this.order);
                    //this.snackbar = true;
                    //this.color = 'success';
                    //this.text = 'You have successfully saved an order.';
                    this.dialog = true;
                } catch (err) {
                    this.snackbar = true;
                    this.color = 'error';
                    this.error = err.message;
                    console.log(this.error);
                }

                
            }
        },
        async created() {
            try {
                this.productCategories = await ProductCategoryService.getProductCategories();
            } catch (err) {
                this.error = err.message;
            }
        }
    }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.submitBtn {
    text-align: right;
}

.deleteBtn {
    text-align: left;
}

.addProductItem {
    margin-left: 12px;
    margin-bottom: 12px;
}

.totalAmount {
    
}

.order {
    font-family: 'Raleway', sans-serif;
}

</style>