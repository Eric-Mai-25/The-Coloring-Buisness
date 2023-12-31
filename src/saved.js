const saved =  document.getElementById('saved')
const exportSaved =  document.getElementById('export')


export default class SavedCollection{
    constructor(updatecolor){
        this.collection = []
        this.updateColor = updatecolor
    }

    update(collection){
        this.collection = collection
    }

    populate(){
        saved.innerHTML= ""
        let count = 1
        this.collection.forEach((collObj)=>{
            const sItems = document.createElement('div')
            sItems.classList.add("save-items")

            const sItem = document.createElement('button')
            sItem.innerText = `Save ${count}`
            count++
            sItem.classList.add(`save-item`)
            sItem.classList.add(`button${count}`)
            sItem.style.background = `linear-gradient(60deg, ${collObj[0]} 20%, 
                ${collObj[1]} 20% 40%, 
                ${collObj[2]} 40% 60%, 
                ${collObj[3]} 60% 80%, 
                ${collObj[4]} 80%)` 

            sItems.appendChild(sItem)
            
            saved.appendChild(sItems)

            sItem.addEventListener('click', ()=>{
                this.updateColor(collObj)
            })
        })
    }

    export(){

          const jsonString = JSON.stringify(this.collection);
          
          const blob = new Blob([jsonString], { type: 'text/plain' });
          
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = 'myObject.txt';

          downloadLink.click();
    }

}