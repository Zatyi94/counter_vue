
// ez itt egy JavaScript modul
export default {
    data() {
        return {
            number : 0
        }
    },
    template : `
    <button @click="number--">-</button>
    {{ number }}    
    <button @click="number++">+</button>
    `
}