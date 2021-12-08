export function renderBall(ballData) {
    const p = document.createElement('p');

    p.textContent = ballData;
    p.classList.add('ball');

    // if loop
    if (ballData === 'billiard') {
        p.style.backgroundColor = 'yellow';
    }

    if (ballData[0] === 'b') {
        p.style.transform = 'rotate(90deg)';
    }

    if (ballData[0] === 'ba') {
        p.style.backgroundColor = 'purple';
    }

    return p;
}

export function renderPie(pieData) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('pie');

    div.style.fontSize = `${pieData.taste_score}rem`;

    div.style.backgroundColor = pieData.color;
    
    p.textContent = pieData.name;

    div.append(p);

    return div;

}

export function renderBill(billData) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('bill');

    div.style.fontSize = `${billData.taste_score}rem`;

    div.style.backgroundColor = billData.color;
    
    p.textContent = billData.name;

    div.append(p);

    return div;

}

export function renderPost(postData) {
    const postEl = document.createElement('div');
    const titleEl = document.createElement('p');

    postEl.classList.add('post');

    titleEl.textContent = `${postData.user} says: ${postData.title}`;

    postEl.append(titleEl);

    for (let reply of postData.replies) {
        const replyEl = document.createElement('p');

        replyEl.textContent = reply;

        replyEl.classList.add('reply');
        postEl.append(replyEl);
    }

    return postEl;
}