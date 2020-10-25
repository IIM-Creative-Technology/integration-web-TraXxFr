let slider_state_0 = $('#state_0')
let slider_state_1 = $('#state_1')
let slider_state_2 = $('#state_2')
let slider_buttons = $('.slider_button')

slider_state_1.hide();
slider_state_2.hide();

function RightToLeft(id,val){
    if(isNaN(val)){ val = 0;}
    document.getElementById(id).style.marginLeft=val + '%';
    if(val>0){
        val--;
        setTimeout('RightToLeft("'+id+'",'+val+')',6);
    }else{}
}

function LeftToRight(id,val){
    if(isNaN(val)){ val = 0;}
    document.getElementById(id).style.marginLeft=(-val) + '%';
    if(val>0){
        val--;
        setTimeout('LeftToRight("'+id+'",'+val+')',6);
    }else{}
}

let old_id = 0;

slider_buttons.click(function () {

    if(!this.classList.contains("active")) {

        Array.prototype.forEach.call(slider_buttons, function (button, index) {
            if(button.classList.contains("active")) {
                button.classList.remove("active");
            }
        })

        this.classList.add("active");

        let id = parseInt(this.id.charAt(this.id.length-1));

        switch (true) {

            case id === 0:

                slider_state_0.show();
                slider_state_1.hide();
                slider_state_2.hide();

                id > old_id ? RightToLeft('state_0', 30) : LeftToRight('state_0', 30);

                break;

            case id === 1:

                slider_state_0.hide();
                slider_state_1.show();
                slider_state_2.hide();

                id > old_id ? RightToLeft('state_1', 30) : LeftToRight('state_1', 30);

                break;

            case id === 2:

                slider_state_0.hide();
                slider_state_1.hide();
                slider_state_2.show();

                id > old_id ? RightToLeft('state_2', 30) : LeftToRight('state_2', 30);

                break;

        }

        old_id = id;

    }

})

