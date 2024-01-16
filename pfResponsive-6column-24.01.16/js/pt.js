let frame = "section";
let box = "article";
let speed = "0.5s";
let articleClass = "on";
let btn = document.querySelectorAll ("main ul li");
let grid;
// 그리드선언 (다른곳에서 사용할 변수)
// 플러그인의 정보값이 담길 변수를 전역으로 설정!


window.addEventListener("load",()=>{
init();
// 화면 초기화 함수 호출
filter(btn);
// 정렬버튼기능함수호출
});


// 초기화함수
function init() {

}

// 정렬버튼기능함수정의
function filter(arr){
    // 주어진 버튼 그룹의 각 요소 반복

    for(let el of arr) {
        el.addEventListener("click",e=>{
            e.preventDefault();
            // e.preventDefault(); 링크차단메서드
            
            let sort = e.curruntTarget.querySelector("a").getAttribute("href")
            // Isotope 그리드정렬 및 필터링사용
            grid.arrange({
                filter:sort
                // .arrange 그리드정렬 필터링시 사용되는isotope
            });
            // 버튼 모든 그룹에 액티브클래스 제거
            for (let el of arr) {
                el.classList.remove(activeClass);
            }
            // 클릭된 버튼에 액티브클래스 추가
            e.curruntTarget.classList.add(activeClass);
        });
    }
}











