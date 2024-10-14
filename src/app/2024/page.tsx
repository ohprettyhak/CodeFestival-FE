import Layout from '@/components/common/Layout';
import { theme } from '@/styles/theme.css';

export default function Page() {
  return (
    <Layout>
      <div style={{ padding: theme.sizes.appInlinePadding }}>
        <h1 style={{ marginTop: '30px' }}>제6회 코드페스티벌 대회 정보</h1>
        <p>* 서울캠퍼스 사회과학관 행사장 호실은 업데이트 예정임</p>
        <br />
        <h2>참가 신청</h2>
        <p>대회 홈페이지(https://codefestival.gdghufs.com) 통해 참가 신청</p>
        <p>
          참가신청자 중 비기너 및 챌린저 참가자를 합하여 120명을 선발하며, 트랙 및 캠퍼스 별 인원
          배정은 대회 운영 내규에 따름
        </p>
        <br />
        <h2>참가 자격</h2>
        <p>한국외국어대학교 재학/휴학/졸업대기생</p>
        <p>
          * 2024년 2학기 기준 재학생만 상금 수여가 가능하며, 휴학/졸업대기생은 상금을 지급할 수
          없음.
        </p>
        <br />
        <h2>참가 신청 기간</h2>
        <p>2024년 10월 14일(월) 10:00 – 2024년 10월 21일(월) 23:59</p>
        <br />
        <h2>참가 선발자 안내</h2>
        <p>2024년 10월 24일 (목) 17:00</p>
        <p>휴대전화 및 이메일 개별 안내</p>
        <br />
        <h2>우선 선발 대상자 안내</h2>
        <p>다음 조건에 해당하는 대상자를 우선 선발함.</p>
        <table style={{ marginTop: '16px' }}>
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>자료구조 및 알고리즘 강의 수강자</td>
              <td>
                2023학년도 1학기 - 2024학년도 2학기 기간 중 ‘자료구조’ 혹은 ‘알고리즘’강의를 하나
                이상 수료한 자
              </td>
            </tr>
            <tr>
              <td>AI교육원 코딩테스트 대비 캠프 수료자</td>
              <td>
                2022학년도 겨울방학 코딩테스트 대비 캠프(2023. 1. 29. - 2023. 2. 11.)
                <br />
                2023학년도 여름방학 코딩테스트 대비 캠프(2023. 7. 23. - 2023. 8. 5.)
                <br />
                2023학년도 겨울방학 코딩테스트 대비 캠프(2024. 1. 21. ~ 2024. 2. 3.) <br />
                2024학년도 여름방학 코딩테스트 대비 캠프(2024. 7. 28. ~ 2024. 8. 10.) <br />
                <br />중 하나 이상 수료한 자
              </td>
            </tr>
            <tr>
              <td>제5회 코드페스티벌 참가자</td>
              <td>
                제5회 코드페스티벌(2023) 비기너 트랙 참가자 중 제6회 코드페스티벌(2024) 챌린저
                트랙으로 참가하는 자
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>선발 방식</h2>
        <p>
          각 항목 내 여러개의 조건을 만족 하더라도 항목 별로 가점은 1점으로 제한함. 모든 항목 가점을
          합산하여 우선 선발자 선정에 이용함.
        </p>
        <p>
          각 캠퍼스와 트랙별로 배정된 정원 내에서, 지원자들의 가점 합계에 따라 우선적으로 선발함.
          동일한 가점을 가진 지원자들끼리는 정원 내에서 무작위로 선발함.
        </p>
        <p>정원이 남을 경우, 그 다음으로 낮은 가점 합계를 가진 지원자들 중에서 무작위 선발</p>
        <br />
        <h2>본 행사</h2>
        <h3>주최 / 주관</h3>
        <p>한국외국어대학교 AI교육원 / GDG on Campus HUFS</p>
        <br />
        <h2>행사 일시</h2>
        <p>2024년 10월 31일(목) 17:00 - 21:50 한국외국어대학교 글로벌캠퍼스 공학관 207호</p>
        <p>한국외국어대학교 서울캠퍼스 사회과학관</p>
        <br />
        <h2>행사 인원</h2>
        <table style={{ marginTop: '16px' }}>
          <thead>
            <tr>
              <th></th>
              <th>글로벌캠퍼스</th>
              <th>서울캠퍼스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>비기너 트랙</td>
              <td>48명</td>
              <td>12명</td>
            </tr>
            <tr>
              <td>챌린저 트랙</td>
              <td>48명</td>
              <td>12명</td>
            </tr>
            <tr>
              <td>합계</td>
              <td>96명</td>
              <td>24명</td>
            </tr>
          </tbody>
        </table>
        <p>* 행사 인원은 캠퍼스 및 트랙 별 참가 신청자 추이에 따라 변동될 수 있음</p>
        <br />
        <h2>상장 및 상품</h2>
        <h3>챌린저 트랙</h3>
        <p>
          금상(1명) 한국외국어대학교총장상, 부상 50만원 <br />
          은상(2명) AI교육원장상, 부상 30만원 <br />
          동상(3명) 공과대학장상, 부상 10만원
        </p>
        <h3>비기너 트랙</h3>
        <p>
          <strong>비기너 트랙 참가 우수자 (10명)</strong>
        </p>
        <p>비기너 트랙 우수 참가자 상품 증정</p>
        <br />
        <h2>본 대회</h2>
        <p>2024년 10월 31일 18:00 - 21:00 (대회시간: 180분)</p>
        <p>한국외국어대학교 글로벌캠퍼스 공학관 및 한국외국어대학교 서울캠퍼스 사회과학관</p>
        <br />
        <h2>진행방법</h2>
        <p>
          참가자가 주어지는 문제를 풀이하고 채점 기준에 따라 책정 된 점수를 기준으로 우위를 판별함.
          같은 점수의 경우 더 빠른 시간에 문제를 해결한 경우가 우위
        </p>
        <p>• 개인전</p>
        <p>• Goorm Edu를 이용한 온라인 경시</p>
        <br />
        <h2>문제 구성</h2>
        <h3>비기너 트랙</h3>
        <p>
          7문제) 알고리즘 기본 기법으로 해결할 수 있는 비교적 낮은 난이도의 알고리즘 문제 구성
          <br />
          문제 당 100점 만점으로, 총점 700점 중 높은 점수를 얻는 참가자 중 비기너 트랙 우수자 (10명)
          선정
          <br />* 동점일 경우 풀이 시간이 빠른 참가자가 상위에 배치됨.
        </p>
        <h3>챌린저 트랙</h3>
        <p>
          (7문제) 알고리즘 기법을 응용하여 해결할 수 있는 난이도의 문제 구성
          <br />
          문제 당 100점 만점으로, 총점 700점 중 점수가 높은 순서대로 시상함
          <br />* 동점일 경우 풀이 시간이 빠른 참가자가 상위에 배치됨.
        </p>
        <br />
        <h2>응시 환경</h2>
        <p>
          한국외국어대학교 공학관 및 사회과학관 전산실습실 PC에서 Goorm Edu(hufs.goorm.io)에
          접속하여 진행
        </p>
        <h3>개발 언어 및 컴파일 환경</h3>
        <p>
          C++ - g++ (GCC) 11.1.0
          <br />
          C - gcc (GCC) 11.1.0
          <br />
          Java - Open JDK 14
          <br />
          Python3 - PyPy3.7 (7.3.5)
        </p>
        <p>
          <strong>컴파일러 버전 문서 제공</strong>
          <br />
          응시 IDE 내 컴파일러 버전 레퍼런스 문서가 제공되며, 시험 응시 중 해당 웹사이트 열람이
          허용됨.
        </p>
        <br />
        <h2>대회 규정</h2>
        <p>제6회 코드페스티벌 대회 당일 규정</p>
        <h3>1. 참가자 등록</h3>
        <p>
          • 참가자는 2024년 10월 31일(목), 대회 시작 전 반드시 지정된 장소에서 등록을 완료해야
          합니다.
          <br />
          ◦ 글로벌캠퍼스: 공학관 207호
          <br />◦ 서울캠퍼스: 사회과학관 행사장
          <br />• 등록 시간은 17:00부터 17:25까지이며, 17:40까지 등록하지 않을 경우 참가가 불가능할
          수 있습니다.
          <br />• 식음료 및 기념품은 등록 시 배부되며, 늦게 도착하여 대회 안내를 받지 못할 경우
          발생하는 불이익은 본인의 책임입니다.
        </p>

        <h3>2.경기 진행</h3>
        <p>
          • 대회는 18:00에 시작하여 21:00에 종료됩니다. 총 대회 시간은 180분입니다.
          <br />
          • 참가자는 대회 시작 전 지정된 대회장으로 입실해야 하며, 안내된 좌석에서 대회를
          진행합니다.
          <br />
          ◦ 글로벌캠퍼스: 공학관 307호, 405호, 406호
          <br />◦ 서울캠퍼스: 사회과학관 201호, 203호
          <br />• 대회는 한국외대 Goorm Edu(hufs.goorm.io) 플랫폼을 통해 온라인으로 진행되며, 본인
          확인 후 입실합니다.
        </p>

        <h3>3. 대회 문제 및 채점</h3>
        <p>
          • 참가자는 총 7개의 문제를 풀게 되며, 각 문제는 100점 만점으로 채점됩니다.
          <br />
          ◦ 비기너 트랙: 기본 알고리즘 문제로 구성되며, 총점 700점 중 높은 점수를 받은 참가자 10명을
          선정하여 시상합니다.
          <br />
          ◦ 챌린저 트랙: 응용 알고리즘 문제로 구성되며, 총점 700점 중 점수가 높은 순서대로
          시상합니다.
          <br />• 동점일 경우 문제 풀이 시간이 빠른 참가자가 우위를 점하게 됩니다.
        </p>

        <h3>4. 응시 환경 및 제한 사항</h3>
        <p>
          • 대회는 한국외국어대학교 전산실습실 PC에서 진행됩니다. 참가자는 각 캠퍼스에서 지정된
          전산실의 PC를 사용해야 하며, 개인 노트북은 허용되지 않습니다.
          <br />
          • 참가자는 C++ (GCC 11.1.0), C (GCC 11.1.0), Java (Open JDK 14), Python3 (PyPy 7.3.5) 등의
          프로그래밍 언어를 사용할 수 있습니다.
          <br />• 대회 중에는 인터넷 검색 및 외부 자료 열람이 금지되며, Goorm Edu 내 제공된 레퍼런스
          문서만 사용 가능합니다.
        </p>

        <h3>5. 부정행위 금지</h3>
        <p>
          • 부정행위가 발견될 경우 즉시 대회에서 실격 처리되며, 향후 대회 참여가 제한될 수 있습니다.
          부정행위의 예시는 다음과 같습니다:
          <br />
          ◦ 타 참가자와의 대화 또는 문제 풀이 공유
          <br />
          ◦ 인터넷 검색을 통한 외부 자료 활용
          <br />◦ 허가되지 않은 소프트웨어 사용
        </p>

        <h3>6. 대회 종료 및 시상식</h3>
        <p>
          • 대회는 21:00에 종료되며, 참가자는 대회 종료 후 지정된 장소로 이동합니다.
          <br />
          • 시상식은 21:20부터 21:50까지 글로벌캠퍼스에서 진행되며, 서울캠퍼스 참가자는 유튜브
          실시간 송출로 시청 가능합니다.
          <br />• 시상식 참석은 필수 사항이 아니지만, 불참 시 상금 및 수상에 대한 일부 제한이 있을
          수 있습니다.
        </p>

        <h3>7. 기타 사항</h3>
        <p>
          • 대회 운영진의 안내에 따라야 하며, 대회 중 발생하는 모든 문제는 운영진의 판단에 따라
          해결됩니다.
          <br />• 대회 중 불편사항이나 문의 사항은 현장 운영진에게 문의하시기 바랍니다.
        </p>
        <br />

        <h2>대회 관련 문의</h2>
        <p>
          제6회 코드페스티벌 Q&A 오픈채팅방
          <br />
          <a href="https://open.kakao.com/o/sXwIPjUg" target="_blank">
            https://open.kakao.com/o/sXwIPjUg
          </a>
        </p>
      </div>
    </Layout>
  );
}
