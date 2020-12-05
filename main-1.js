function getTable(){
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;
    let letters = ['1', '2', '3', '4', '5', '6', '7', '8']
    let number = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K']

    for (let i=0; i<9; i++){
        if(i===0){
            for (let b=0; b<9; b++){

                if (b===0){
                    block = document.createElement('section');
                    block.className = 'title';
                }
                else{
                    block = document.createElement('section');
                    block.className = 'title';
                    block.innerHTML = '<p>' + number[b-1] + '<p>'
                }

                mainBlock.appendChild(block);
            }

        }
        else{
            for (let j=0; j<9; j++){
                block = document.createElement('section');
                if (j===0 && i > 0){
                    block.className = 'title';
                    block.innerHTML = '<p>' + letters[i-1] + '<p>'
                    mainBlock.appendChild(block);
                }
                else {
                    if (j === 1) flag = !flag;
                    if (flag) block.className = 'block white';
                    else block.className = 'block black';
                    mainBlock.appendChild(block);
                    flag = !flag
                }
            }
        }

    }
}


getTable();
