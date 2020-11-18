<template>
    <div id="app">
        <v-app>
            <v-app-bar
            app
            dark
            >
            <div class="d-flex align-center">
                <h1>Faça uma pergunta</h1>
            </div>
            </v-app-bar>

            <v-main>
                <body>
                    <div class="input">
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="12"
                                >
                                <v-text-field
                                    label="Escreva sua questão"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    

                    <v-btn
                        class="mr-4 button"
                        @click="getAnswer"
                        >
                    Descubra a resposta
                    </v-btn>

                    <div v-if="answer == 'yes'">
                        SIMMMMM
                    </div>
                    <div v-if="answer == 'no'">
                        NA NA NI NA NÃO
                    </div>

                    <img :src="image">
                </body>
            </v-main>
        </v-app>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Question from './apis/showAnswer'

export default {
  
    components: {
        
    },

    data(){
        return {
        answer: '',
        image: ''
        }
    },

    methods: {
        getAnswer: function(){
            Question.showAnswer().then(res => {
                this.answer = res.data.answer
                this.image = res.data.image
            })
        }

  }

  }


</script>

<style>
* {
    margin: 0, auto;
    padding: 0;
    box-sizing: border-box;
}

body {
    text-align: center;
}

.input {
    margin-top: 90px;
    margin-right: 80px;
    display: inline-block;
    transform: scale(1.3);
}

.button {
    display: inline-block;
}

</style>
