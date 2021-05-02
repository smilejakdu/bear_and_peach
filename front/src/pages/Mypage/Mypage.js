import React , {useState , useEffect , useCallback} from 'react'
import {MypageBody , MypageBodyCenter} from "./Mypage.style"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
const Mypage = () => {
  const [payment_info , paymentInfo] = useState({});
  const dispatch = useDispatch();
  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp77526119');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'kakaopay', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: '홍길동', // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  useEffect(() => {
    axios.get(`/cart`)
    .then((res) => {
      console.log("res : " , res);
    }).catch(error => {
      console.log("error : " , error);
    })
  },[])
  // apply_num: '';
  // bank_name: null;
  // buyer_addr: '신사동 661-16';
  // buyer_email: 'example@example';
  // buyer_name: '홍길동';
  // buyer_postcode: '06018';
  // buyer_tel: '01012341234';
  // card_name: null;
  // card_number: '';
  // card_quota: 0;
  // currency: 'KRW';
  // custom_data: null;
  // imp_uid: 'imp_700886909877';
  // merchant_uid: 'mid_1619951886671';
  // name: '아임포트 결제 데이터 분석';
  // paid_amount: 1000;
  // paid_at: 1619951910;
  // pay_method: 'point';
  // pg_provider: 'kakaopay';
  // pg_tid: 'T2891799277497792163';
  // pg_type: 'payment';
  // receipt_url: 'https://mockup-pg-web.kakao.com/v1/confirmation/p/T2891799277497792163/598db9317ffb8ef3f9e67cca890aba02abcc26424af78514435df251906f40fb';
  // status: 'paid';
  // success: true;

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;
    console.log("response : " , response);
    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

    return (
        <MypageBody>
            <MypageBodyCenter>
                <p>아임 서포트 결제 모듈 테스트 해보기</p>
                <button onClick={onClickPayment}>결제하기</button>
            </MypageBodyCenter>
        </MypageBody>
    )
}

export default Mypage
