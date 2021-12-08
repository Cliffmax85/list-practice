import balls from './balls.js';
import pies from './pies.js';
import bills from './bills.js';
import posts from './posts.js';
import { renderBall, renderPie, renderPost } from './render-utils.js';





const billsEl = document.getElementById('bills-list');
const ballsEl = document.getElementById('balls-list');
const piesEl = document.getElementById('pies-list');
const postsEl = document.querySelector('#posts-list');






for (let ball of balls) {
    const ballEl = renderBall(ball);

    ballsEl.append(ballEl);
}


for (let pie of pies) {
    const pieEl = renderPie(pie);

    piesEl.append(pieEl);
}

for (let bill of bills) {
    const billDiv = document.createElement('div');
    const billNameEl = document.createElement('p');
    const billScoreEl = document.createElement('p');
    const billImageEl = document.createElement('img');

    const favBillDiv = document.createElement('div');
    const favBillNameEl = document.createElement('p');
    const favBillType = document.createElement('p');
    const favBillImageEl = document.createElement('img');

    billDiv.classList.add('bill');
    favBillDiv.classList.add('fave-bill');

    billNameEl.textContent = bill.name;
    billScoreEl.textContent = bill.score;
    billImageEl.src = bill.url_image;
    favBillNameEl.textContent = bill.fav_bill.name;
    favBillType.textContent = bill.fav_bill.type;
    favBillImageEl.src = bill.fav_bill.img;

    favBillDiv.append(favBillNameEl, favBillType, favBillImageEl);

    billDiv.append(billNameEl, billScoreEl, billImageEl, favBillDiv);

    billsEl.append(billDiv);
}

for (let post of posts) {
    const postEl = renderPost(post);

    postsEl.append(postEl);
}
