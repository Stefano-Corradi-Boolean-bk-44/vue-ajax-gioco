

const app = new Vue({

  el: '#app',

  data: {

    isLoading: true,
    httpError: false,
    numbers:[],
    risultato: ''

    
  },
  methods:{

    getNumber(){
      this.isLoading = true;
      this.numbers = [];

      for(let i = 0; i < 2; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((response) =>{

          console.log('response.data',response.data);

          const data = response.data;

          this.numbers.push(data.response)
          // solo quando è completo l'array finisce il loading
          if(this.numbers.length === 2){
            this.isLoading = false;
          }
        })
        .catch((error) =>{
          console.log('KO',error);
          // solo n questo caso viene visulizzato l'erroe
          this.httpError = true;
        })
      }

    }

  },
  computed:{
    // viene attivata al modificare dei dati in essa contenuta
    // deve avere il return
    result(){
      if(this.numbers.length === 2){
        if(this.numbers[0] === this.numbers[1]){
          return 'PARI';
        }
        return this.numbers[0] > this.numbers[1] ? 'A' : 'B';
      }
      return ''
    }
  },
  mounted(){

    this.getNumber();
    

  }






})