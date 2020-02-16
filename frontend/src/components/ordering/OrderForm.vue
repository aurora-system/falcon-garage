<template>
    <div class="order">
        <v-form ref="form" :lazy-validation="false">
                <v-card outlined>
                    <v-card-title>
                        <v-col class="d-flex">
                            <h4>Create an Order</h4>
                        </v-col>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-row> 
                        <!-- BASIC ORDER DETAILS -->
                            <v-container>
                                <v-row dense>
                                    <v-col cols="12" md="4">
                                        <v-container>
                                            <v-row>
                                                <!-- ORDER DATE -->
                                                <v-dialog
                                                    ref="dialog"
                                                    v-model="modal"
                                                    :return-value.sync="order.createdDate"
                                                    persistent
                                                    width="290px"
                                                >
                                                    <template v-slot:activator="{ on }">
                                                    <v-text-field
                                                        v-model="order.createdDate"
                                                        label="Order Date"
                                                        readonly
                                                        v-on="on"
                                                        outlined
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="order.createdDate" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                                    <v-btn text color="primary" @click="$refs.dialog.save(order.createdDate)">OK</v-btn>
                                                    </v-date-picker>
                                                </v-dialog>
                                            </v-row>
                                            <v-row>
                                                <!-- ORDER TYPE -->
                                                <v-select 
                                                    :rules="orderTypeRules" 
                                                    :items="orderTypes" 
                                                    label="Order Type" 
                                                    v-model="order.type" 
                                                    required 
                                                    outlined></v-select>
                                                </v-row>
                                            <v-row>
                                                <!-- CUSTOMER NAME -->
                                                <v-text-field :rules="custNameRules" id="customerName" v-model="order.customerName" label="Customer Name" required outlined></v-text-field>
                                            </v-row>
                                        </v-container>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-container>
                                        
                                        <v-row>
                                            <v-select
                                                @change="setDueDateState()"
                                                :items="paymentTypes"
                                                :rules="paymentTypeRules"
                                                name="paymentType"
                                                label="Payment Type"
                                                v-model="order.paymentType"
                                                outlined>
                                            </v-select>
                                        </v-row>
                                        <v-row>
                                            <v-select
                                                :items="monthlyDueDates"
                                                :rules="paymentTypeRules"
                                                name="monthlyDueDate"
                                                label="Monthly Due Date"
                                                v-model="order.monthlyDueDate"
                                                :disabled="dueDateDisabled"
                                                outlined>
                                            </v-select>
                                        </v-row>
                                        <v-row>
                                             <!-- REMARKS -->
                                            <v-text-field
                                                outlined
                                                name="remarks"
                                                label="Remarks"
                                                value=""
                                                v-model="order.remarks"
                                                no-resize
                                                ></v-text-field>
                                        </v-row>
                                       
                                        </v-container>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <!-- GUIDE -->
                                        <v-container>
                                            <v-alert
                                                icon="mdi-lightbulb-outline"
                                                prominent
                                                text
                                                type="info">
                                                {{ guideText }}
                                            </v-alert>
                                        </v-container>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                            <!-- PRODUCTS SELECTION -->
                             <v-container>
                                    <v-row class="productSelection" v-for="(input, index) in inputs" v-bind:key="index" >
                                       
                                        <!-- DELETE BUTTON -->
                                        <v-col class="deleteBtn" cols="12" md="1">
                                            <!--<v-icon @click="deleteRow(index)" large>mdi-trash-can-outline</v-icon>-->
                                            <v-btn large color="error" @click="deleteRow(index)">remove</v-btn>
                                        </v-col>

                                        <!-- CATEGORIES -->
                                        <v-col cols="12" md="3">
                                            <v-select
                                                @change="getProductsOfCategory(input.category, index)"
                                                :items="productCategories"
                                                :rules="categoryRules"
                                                name="productCategory"
                                                item-text="name"
                                                item-value="categoryId"
                                                label="Category"
                                                v-model="input.category"
                                                outlined>
                                            </v-select>
                                        </v-col>

                                        <!--_PRODUCTS -->
                                        <v-col cols="12" md="3">
                                            <v-select 
                                                @change=getSubtotalAmount(input.quantity,input.selectedProductId,index)
                                                :items=input.products
                                                :rules="productRules"
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

                                        <v-col class="overridePrice" cols="12" md="2">
                                            <v-text-field 
                                                name="overridePrice"
                                                label="Overide Price"
                                                @change=getSubtotalAmount(input.quantity,input.selectedProductId,index)
                                                v-model="input.overridePrice"
                                                type="number"
                                                min="0"
                                                outlined></v-text-field>
                                        </v-col>

                                    </v-row>
                                </v-container>
                                    <v-divider></v-divider>
                                    <!--<v-row>
                                        <v-col cols="12" md="2">
                                            <div class="addBtn">
                                                <v-btn large color="primary" @click="addRow">Add Item</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>-->
                                    <v-row>
                                        <!--<v-col cols="12" md="3"><h4>Total Amount: </h4></v-col>-->
                                        <v-col cols="12" md="12">
                                            <v-alert class="totalAmount" text color="green" icon="mdi-currency-php" >{{ totalAmount }}</v-alert>
                                        </v-col>
                                    </v-row>

                            </v-container>
                    </v-row>
                    <v-divider></v-divider>
                    <v-card-actions class="ml-4">
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
                                <v-btn large color="primary" @click="addRow">Add a Product</v-btn>
                                <v-btn large color="primary" @click="createOrder">Submit Order</v-btn>
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
                    </v-card-actions>
                </v-card>
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
                inputs: [ { products: [], category: '', quantity: '', subtotal: 0, selectedProductId: '', overridePrice: null } ],
                order: {
                    orderId: '1',
                    type: '',
                    createdDate: new Date().toISOString().substr(0, 10),
                    customerName: '',
                    paymentType: '',
                    monthlyDueDate: '',
                    totalAmount: 0,
                    remarks: '',
                    products: []
                },
                orderTypes: [ 'sale', 'service'],
                paymentTypes: [ 'cash', 'check' ],
                monthlyDueDates: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                products: [],
                productCategories: [],
                dueDateDisabled: true,
                guideText: 'Press ADD A PRODUCT to add an additional product row. Default SRP is computed automatically buy you may override the value for this order. Total amount is also automatically computed. Press SUBMIT ORDER to save your entries. The order will be added to the list below.',
                subtotalColor: "green",
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
                paymentTypeRules: [
                    v => !!v || ''
                ],
                quantityRules: [
                    v => !!v || ''
                ],
                categoryRules: [
                    v => !!v || ''
                ],
                productRules: [
                    v => !!v || ''
                ],
                modal: false

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
                    selectedProductId: '',
                    overridePrice: null
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
            setDueDateState () {
                if (this.order.paymentType == "check") {
                    this.dueDateDisabled = false;
                } else {
                    this.dueDateDisabled = true;
                    order.monthlyDueDate = 0;
                }
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

                if (inputItem.overridePrice == null || inputItem.overridePrice == "") {
                    console.log("NULL OVERRIDE. product.srp is: " + product.srp);
                    inputItem.subtotal = qty*product.srp;
                } else {
                    console.log("override price is not null.");
                    inputItem.subtotal = qty*inputItem.overridePrice;
                }

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

.productSelection {

}

</style>