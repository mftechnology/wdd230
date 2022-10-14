const input = document.querySelector('input'); /* get the value into element input*/
const button = document.querySelector('button'); /* get the value into element button*/
const list_ul = document.querySelector('ul'); /* get the value into element ul*/

button.addEventListener('click', function() {
    if (input.value != "") {
    const scripture = input.value; /* get the tex value inserted*/
    const list_li = document.createElement("li"); /* create element li and store on list_lis*/
    const list_span = document.createElement("span"); /* create element span and store on list_span*/
    const btn_del = document.createElement("button"); /*create element button and store on btn_del*/

    list_li.appendChild(list_span);
    list_li.textContent = scripture;
    list_li.appendChild(btn_del);
    btn_del.textContent = "❌";

    list_ul.appendChild(list_li);

    input.value = "";

    btn_del.addEventListener('click', function() {
        list_ul.removeChild(list_li)
    })
    }
}
)