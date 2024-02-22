// 카트 추가
function addToCart(button) {
    const productDetails = button.closest('.product').querySelector('.product-details');
    // .closest - 본인보다 상위요소 탐색 후 일치요소를 찾으면 검색 멈춤
    const productName = productDetails.querySelector('h2').textContent;
    // .childNodes : 모든 자식 [2] - 세 번째 자식(0이 1이기 때문에)
    const productPrice = productDetails.querySelector('.price').childNodes[2].textContent.trim();
    // .textContent 내용 가져옴 - html 무시되고 내용만 가져와짐
    // .trim() - 공백 제거

    const cartItems = document.getElementById('clear-items');
    const listItem = document.createElement('li');

    // .createElement - 새로운 요소 생성

    // 새로운 요소 생성 - 제품명과 가격을 리스트아이템에 넣어줌
    listItem.textContent = `${productName} - ${productPrice}`;
    listItem.style.display = 'inline';

    const removeButton = document.createElement('span');
    removeButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1L0.999999 13" stroke="#FF0000" stroke-width="1.33333" stroke-linecap="round"/>
    <path d="M13 13L0.999999 0.999999" stroke="#FF0000" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
    // .innerHTML - html 변경시 사용

    // 리스트 아이템 추가
    cartItems.appendChild(listItem)

    // X버튼 추가
    listItem.appendChild(removeButton)

    // 마진값 추가
    removeButton.style.margin = '0 30px 0 7px'

    // X버튼 클릭 시 리스트 삭제
    removeButton.addEventListener('click', function () {
        listItem.remove();
        // 리스트 삭제
    });

}

// 전체 삭제
function clearCart() {
    const cartItems = document.getElementById('clear-items');
    cartItems.innerHTML = ''; // 모든 자식 요소 삭제
}

// 좋아요 버튼 해제
function toggleLike(button) {
    // 자바스크립트는 매개변수에(button)이라고 써주면 html 요소로 간주한다.
    // .contains() - 포함되어있는지 확인
    // .textContent - 텍스트 내용을 나타내는 속성으로, 텍스트 변경 시 사용
    button.textContent = button.classList.contains('like-button') ? '좋아요 해제' : '좋아요';
    button.classList.toggle('like-button');
    button.classList.toggle('unlike-button');
    // .toggle() - 존재하면 제거, 없으면 추가 (두 가지 역할을 수행)
    // 삼항조건연산자 "조건 ? 표현식1 : 표현식2"
    // 조건이 참일 경우에만 실행되는 표현식1
    // 조건이 거짓일 경우 실행되는 표현식2
    // .slideToggle() - 애니메이션 효과가 들어간 토글
}