<template>
    <div class="home">
        <!--<p>This is the dashboard page.</p>-->

        <v-row>
            <v-col>
            <v-alert
                prominent
                type="error"
                >
                <v-row align="center">
                    <v-col class="grow">This is a sample announcement or notification.</v-col>
                    <v-col class="shrink">
                    <v-btn>Take action</v-btn>
                    </v-col>
                </v-row>
            </v-alert>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <h4>Orders Today</h4>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="dailySales"
                        item-key="name"
                        class="elevation-1"
                        no-data-text="There are no items."
                        sort-by="createdDate"
                        sort-desc
                        :search="search"
                        v-model="selected"
                    >
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>
                        <h4>Products Sold Today</h4>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="dailySales"
                        item-key="name"
                        class="elevation-1"
                        no-data-text="There are no items."
                        sort-by="createdDate"
                        sort-desc
                        :search="search"
                        v-model="selected"
                    >
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-card
                    class="text-center"
                    color="green"
                    dark
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                        <h1>Sample chart only</h1>
                    </v-card-text>

                    <v-divider></v-divider>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card
                    class="text-center"
                    color="blue"
                    dark
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value2"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                        <h1>Sample chart only</h1>
                    </v-card-text>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="12">
                <v-card
                    class="text-center"
                    color="orange"
                    dark
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value3"
                        color="rgba(255, 255, 255, .7)"
                        height="70"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                        <h1>Sample chart only</h1>
                    </v-card-text>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            headers: [
                { text: 'Date', value: ''},
                { text: 'Orders', value: 'type' },
                { text: 'Total Amount', value: 'customerName' }
            ],
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                7,
                60,
            ],
            value2: [
                1000,
                446,
                675,
                50,
                590,
                610,
                45,
            ],
            value3: [
                1000,
                446,
                675,
                50,
                590,
                4,
                778,
                456,
                120,
                800,
                1200,
                350
            ]
        } 
    }
}
</script>

<style >
    
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.home {
    font-family: 'Raleway', sans-serif;
}

</style>