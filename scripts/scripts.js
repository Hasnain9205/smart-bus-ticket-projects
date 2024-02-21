
const allBtn = document.getElementsByClassName("seat-btn");
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        if(count < 4){
            count += 1;
            btn.setAttribute('disabled', true);
    
            const seatApen = document.getElementById('apen');
            
            console.log(seatApen,e.target)
            const row = document.createElement('div');
            row.setAttribute('class', 'flex-row flex justify-between');
            const h4 = document.createElement('h4');
            h4.innerText = btn.getAttribute('data-seat');
            const p = document.createElement('p');
            p.innerText = btn.getAttribute('data-class');
            const p2 = document.createElement('p');
            p2.innerText = btn.getAttribute('data-price');
            const totalElement =  document.getElementById('total');
            const prevTotal = Number(totalElement.innerText);
            const total = prevTotal + Number(btn.getAttribute('data-price'));
            totalElement.innerText = total;

            const grandTotal = document.getElementById('grand-total');
            const grandPrice = Number(grandTotal.innerText);
             
            const inTotal = grandPrice + Number(btn.getAttribute('data-price'));
            grandTotal.innerText = inTotal;
    
    
            row.appendChild(h4);
            row.appendChild(p);
            row.appendChild(p2);
            seatApen.appendChild(row);
            
            
    
    
            const seatsSelect = document.getElementById('seat');
            const select = seatsSelect.innerText;
            const selectNum = parseInt(select);
            seatsSelect.innerText = selectNum + 1;
    
            const seatNumber = document.getElementById('select');
            const left = seatNumber.innerText;
            const seatLeft = parseInt(left);
            seatNumber.innerText = seatLeft - 1;
        }
        else{
            alert('You have up to 4 seat selected')
        }
        

        
    })
 

}

const coupon = document.getElementById('coupon');
const couponText = coupon.innerText;
const couponCouple = document.getElementById('coupon-couple');
const coupleText = couponCouple.innerText;
const appplyButton = document.getElementById('apply-btn');
appplyButton.addEventListener('click',function(){
    const inputCoupon = document.getElementById('input-fild');
    const grandTotal = document.getElementById('grand-total');

    if(inputCoupon.value === couponText){
        grandTotal.innerText = (total.innerText*(100-15)/100);
    }
    else if(inputCoupon.value === coupleText){
        grandTotal.innerText = (total.innerText*(100-20)/100);
    }
    else{
        alert('Please give me Currect coupon');
    }
    
})

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click',function(){
    const nextInput = document.getElementById('next-input');
    
   
    if(nextInput.value){
        bookingSuccessByHidden('hide');
        bookingSuccessByShow('show');
    }
    else{
        alert('Please fill up the from')
    }

})

function scrollWin() {
    window.scrollTo(0, 2200);
  }


function coutinue(){
    bookingSuccessByShow('hide');
    bookingSuccessByHidden('show');
}
