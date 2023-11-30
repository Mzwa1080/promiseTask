
function promiseTask(resolve, reject ){
    let input1 = +document.querySelector('[data-input1]').value;
    let input2 = +document.querySelector('[data-input2]').value;
    let display = document.querySelector('[data-display]')
    let sum = input1 + input2;
    // console.log(sum);
    // console.log(typeof input1 + " - " + typeof input2);
    if(typeof input1 =='number' && typeof input2 =='number')
        display.textContent = `${input1} + ${input2} = ${sum}`
        resolve(`${input1} + ${input2} = ${sum}`)
        reject(`Please provide a number in the input`)
    

}

let addition = new Promise(promiseTask);
addition.then( output =>{
    console.log(output);
})


document.querySelector('[data-submit]').addEventListener('click', promiseTask)