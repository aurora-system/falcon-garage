<template>
    <div class="order">
        <v-form>
            <v-container>
                <v-row> 
                    <v-col class="d-flex">
                         <v-container>
                            <h4>Order Details</h4>
                            <v-row dense >
                                <v-col class="customerName">
                                    <v-text-field id="customerName" v-model="order.customerName" label="Customer Name" required outlined></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="orderType">
                                    <v-select :items="orderTypes" label="Order Type" v-model="order.type" required outlined></v-select>
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
                                        no-resize="true"
                                        v-model="order.remarks"
                                        ></v-textarea>
                                </v-col>
                            </v-row>

                         </v-container>
                    </v-col>


                    <v-col class="d-flex" cols="12" md="8">
                         <v-container>
                             <h4>Order Items</h4>
                             <v-row v-for="(input, index) in inputs" v-bind:key="index" dense>
                    
                                <v-col cols="12" md="8">
                                    <v-select 
                                        @change=getSubtotalAmount(input.quantity,input.product,index)
                                        :items="products" 
                                        name="product" 
                                        item-text="name" 
                                        item-value="cost"
                                        label="Product" 
                                        v-model="input.product"
                                        outlined>
                                    </v-select>
                                </v-col>

                                <v-col cols="12" md="1">
                                    <v-text-field id="quantity" @change=getSubtotalAmount(input.quantity,input.product,index) v-model="input.quantity" label="Qty" required outlined></v-text-field>
                                </v-col>

                                <v-col class="subtotalCost" cols="12" md="2">
                                    <v-alert @change="getTotalAmount()" text v-model="input.cost" color="green" icon="mdi-currency-php">{{ input.subtotal }}</v-alert>
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
                                <v-col cols="12" md="5"><h4>Total Amount: </h4></v-col>
                                <v-col cols="12" md="7">
                                    <v-alert class="totalAmount" text color="green" icon="mdi-currency-php" >{{ totalAmount }}</v-alert>
                                </v-col>
                            </v-row>
                         </v-container>
                    </v-col>
                </v-row>
            
                <v-divider></v-divider>
                
                <v-row>
                    <v-col cols="12" sm="6" md="12">
                         <div class="submitBtn">
                            <v-btn large color="primary" @click="createOrder">Submit</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import OrderService from '../../services/OrderService';
    import ProductService from '../../services/ProductService';

    export default {
        data () {
            return {
                totalAmount: 0,
                inputs: [ { product: '', quantity: '', subtotal: 0 } ],
                order: {
                    orderId: '1',
                    type: '',
                    customerName: '',
                    createdDate: '',
                    remarks: ''
                },
                orderTypes: [ 'sale', 'service'],
                products: []
            }
        },
        computed: {
            
        },
        methods: {
            showAlert () {

            },
            addRow() {
                this.inputs.push({
                    product: '',
                    quantity: ''
                })
            },
            deleteRow(index) {
                var inputItem = this.inputs[index];
                if (inputItem.subtotal != null) {
                    this.totalAmount = this.totalAmount - inputItem.subtotal;
                }
                this.inputs.splice(index,1);
            },
            getSubtotalAmount (qty, cost, index) {
                var inputItem = this.inputs[index];
                inputItem.subtotal = qty*cost;
                this.totalAmount = this.totalAmount + inputItem.subtotal;
            },
            async createOrder () {
                try {
                    this.orders = await OrderService.insertOrder(this.order);
                } catch (err) {
                    this.error = err.message;
                }
            }
        },
        async created() {
            try {
                this.products = await ProductService.getProducts();
                console.log("Printing products: " + this.products);
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