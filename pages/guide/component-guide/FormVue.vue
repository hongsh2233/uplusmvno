<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form Vue</div>

      <div class="section">
        <h3 class="tit03">input component</h3>
        <div class="box_yellow">
          <div class="option_info">
            <p>component option (필요한 옵션만 사용)</p>
            <dl>
              <dt>type:</dt><dd>'password', 'number'</dd>
              <dt>value:</dt><dd>'text'</dd>
              <dt>placeholder:</dt><dd>'text'</dd>
              <dt>disabled:</dt><dd>true</dd>
              <dt>maxLength:</dt><dd>4</dd>
              <dt>minLength:</dt><dd>4</dd>
              <dt>readonly:</dt><dd>true</dd>
              <dt>search:</dt><dd>true</dd>
              <dt>searchDisabled:</dt><dd>true</dd>
              <dt>authNum:</dt><dd>true</dd>
              <dt>findNum:</dt><dd>true</dd>
            </dl>
            <div>
              ! data에는 ''를 쓸 수 없음 & lsquo;, & rsquo; 로 대체 ==> placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력'
            </div>
          </div>
        </div>
        <br>

        <div class="form_group">
          <div class="form_item">
            <InputBox :option="{ placeholder:'input sample' }" @inputValue="console.log($event)">
              <template v-slot:before></template>
              <template v-slot:after></template>
            </InputBox>
            <InputBox :option="{ placeholder:'disabled sample', disabled:true }" @inputValue="console.log($event)" />
            <InputBox :option="{ placeholder:'readonly sample', readonly:true }" @inputValue="console.log($event)" />
          </div>

          <div class="form_item">
            <InputBox :option="{ placeholder:'검색어를 입력해주세요' }" @inputValue="console.log($event)" />
          </div>
          <div class="form_item">
            <InputBox :option="{ value:'김알파', placeholder:'검색어를 입력해주세요', search:true, }" @inputValue="console.log($event)" />
          </div>
          <div class="form_item">
            <InputBox :option="{ placeholder:'4자리 숫자', findNum:true }" @inputValue="console.log($event)" />
          </div>
          <div class="form_item">
            <InputBox :option="{ placeholder:'4자리 숫자', disabled:true, findNum:true }" @inputValue="console.log($event)" />
          </div>
          <div class="form_item">
            <InputBox :option="{ value:'322115', placeholder:'4자리 숫자', authNum:true }" @inputValue="console.log($event)" />
          </div>
          <div class="form_item">
            <InputBox :option="{ value:'322115', disabled:true, placeholder:'4자리 숫자', authNum:true }" @inputValue="console.log($event)" />
          </div>
          
        </div><!-- .form_group -->
      </div>

			<div class="section">
				<h3 class="tit02">select</h3>

				<button type="button" class="btn_select">배송 시 요청사항 선택하기</button>

				<button type="button" class="btn_select" disabled>배송 시 요청사항 선택하기</button>

				<select name="" class="select">
          <option disabled selected>배송 시 요청사항 선택하기</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
				</select>

				<select name="" class="select" disabled>
          <option disabled selected>배송 시 요청사항 선택하기</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
				</select>
      </div>

      
			<div class="section">
				<h3 class="tit02">selectList</h3>
        <ul class="select_list" role="listbox">
          <li role="none" :class="{ on : a.selected }" v-for="(a, i) in dataSelectList" :key="i">
            <button type="button" role="option" :aria-selected="a.selected" :data-option="a.title" @click="clickSelectListItem('dataSelectList', a)">{{ a.title }}</button>
          </li>
				</ul>
      </div>

      

			<div class="section">
        <h3 class="tit02">textarea</h3>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요"></textarea>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" disabled></textarea>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" readonly></textarea>
      </div>

      <div class="section">
        <h3 class="tit02">TextareaBox ty01</h3>
        <TextareaBox :data="{
            type:'ty01',
            placeholder:'문의 내용을 입력해 주세요',
            // value:'',
            // rows: 1,
            maxlength: 1000,
            byteCheck: true,
            // button: false,
            // buttonValue:'',
            // disabled:false,
            // readonly: false,
          }"
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
        <TextareaBox :data="{
            type:'ty01',
            placeholder:'문의 내용을 입력해 주세요',
            // value:'',
            // rows: 1,
            maxlength: 1000,
            byteCheck: true,
            // button: false,
            // buttonValue:'',
            disabled:true,
            // readonly: false,
          }"
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
        <TextareaBox :data="{
            type:'ty01',
            placeholder:'문의 내용을 입력해 주세요',
            // value:'',
            // rows: 1,
            maxlength: 1000,
            byteCheck: true,
            // button: false,
            // buttonValue:'',
            // disabled:false,
            readonly: true,
          }" 
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
      </div>

      <div class="section">
        <h3 class="tit02">TextareaBox ty02</h3>
        <TextareaBox :data="{
            type:'ty02',
            placeholder:'문의 내용을 입력해 주세요',
            // value:'',
            rows: 1,
            maxlength: 50,
            byteCheck: true,
            // button: false,
            // buttonValue:'',
            disabled:false,
            readonly: false,
          }" 
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
        <TextareaBox :data="{
            type:'ty02',
            placeholder:'문의 내용을 입력해 주세요',
            // value:'',
            rows: 1,
            maxlength: 50,
            byteCheck: true,
            button: true,
            buttonValue:'등록',
            // disabled:false,
            // readonly: false,
          }" 
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
        <TextareaBox :data="{
            type:'ty02',
            placeholder:'문의 내용을 입력해 주세요',
            value:'문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요 문의 내용을 입력해 주세요',
            rows: 1,
            maxlength: 50,
            byteCheck: true,
            button: true,
            buttonValue:'등록',
            // disabled:false,
            // readonly: false,
          }" 
          @textareaValue="console.log($event)"
          @textareaSubmit="console.log($event)"
        />
			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">radio</h3>

        <div class="radio_st">
          <input type="radio" id="radio01_00" name="radio01">
          <label for="radio01_00"></label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_01" name="radio01">
          <label for="radio01_01">radio01_01</label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_02" name="radio01" disabled>
          <label for="radio01_02">radio01_02</label>
        </div>
        <div class="radio_st">
          <input type="radio" id="radio01_03" name="radio01" checked disabled>
          <label for="radio01_03">radio01_03</label>
        </div>
			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">checkbox</h3>

        <div class="check_st">
          <input type="checkbox" id="checkbox01_00" name="">
          <label for="checkbox01_00"></label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_01" name="">
          <label for="checkbox01_01">checkbox01_01</label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_02" name="" disabled>
          <label for="checkbox01_02">checkbox01_02</label>
        </div>
        <div class="check_st">
          <input type="checkbox" id="checkbox01_03" name="" checked disabled>
          <label for="checkbox01_03">checkbox01_03</label>
        </div>

        <br><br>

        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_00" name="">
          <label for="checkbox02_00"></label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_01" name="">
          <label for="checkbox02_01">checkbox02_01</label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_02" name="" disabled>
          <label for="checkbox02_02">checkbox02_02</label>
        </div>
        <div class="check_st ty02">
          <input type="checkbox" id="checkbox02_03" name="" checked disabled>
          <label for="checkbox02_03">checkbox02_03</label>
        </div>

        <br><br>

        <div class="item_list">
          <ul>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_00" name="">
                <label for="checkbox03_00">check_list</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_01" name="">
                <label for="checkbox03_01">check_list</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox03_02" name="">
                <label for="checkbox03_02">check_list</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->

        <br><br>

        <div class="item_list02">
          <ul>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_00" name="">
                <label for="checkbox04_00">check_list02</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_01" name="">
                <label for="checkbox04_01">check_list02</label>
              </div>
            </li> 
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox04_02" name="">
                <label for="checkbox04_02">check_list02</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">form list</h3>
					
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_row">
              <strong class="form_label">서비스 이용 요금</strong>
              <strong class="form_right price">42,328원</strong>
            </div>
            <div class="form_item">
              2024년 3월 1일(금) ~ 29일(금)(개통일)
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'수령인을 입력해주세요' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">고객명을 입력해 주세요</div>
            <div class="info">information 실수령인의 고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item">
              <InputBox :option="{ value:'김알파', placeholder:'수령인을 입력해주세요' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder:'고객명' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">검색어를 입력 해주세요</div>
          </div>


          <div class="form_group">
            <div class="form_item">
              <InputBox :option="{ value:'김알파', placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">검색어를 입력 해주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <select name="" class="select" style="flex:none; width:30%;">
                <option disabled selected>전체</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <InputBox :option="{ value:'김알파', placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            
            <div class="form_item">
              <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', search:true }" @inputValue="console.log($event)" />  
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <InputBox :option="{ value:'322115', authNum:true }" @inputValue="console.log($event)" />  
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="text_info">휴대폰으로 전송된 인증번호를 3분안에 입력해 주세요.(유심구매 > 배송정보)</div>
          </div>

          <div class="form_group">
            <strong class="form_label">휴대폰번호</strong>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰번호를 확인해주세요</div>
            <div class="form_item">
              <InputBox :option="{ value:'010-12**-56**', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', disabled:true }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03" disabled>인증번호 재전송</button>
            </div>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ value:'322115', disabled:true, placeholder:'4자리 숫자', authNum:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="error">인증번호 입력시간이 초과되었습니다</div>
          </div>

          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ value:'01011111111', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />  
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <InputBox :option="{ value:'322115', authNum:true }" @inputValue="console.log($event)" />  
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <InputBox :option="{ value:'01011111111', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <InputBox :option="{ value:'322115', authNum:true }" @inputValue="console.log($event)" /> 
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn md c03">인증 확인</button>
          </div>
          <div class="form_group">
            <strong class="form_label">픽업 가능한 편의점 조회</strong>
            <div class="btn_group">
              <button type="button" class="btn md c04">GS25 편의점 조회</button>
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ value:'01011111111', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <InputBox :option="{ value:'322115', authNum:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <InputBox :option="{ value:'01011111111', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', disabled:true, }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03" disabled>인증 재요청</button>
            </div>
            <div class="form_item">
              <InputBox :option="{ value:'322115', disabled:true, authNum:true, }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주소</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'우편주소' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <InputBox :option="{ placeholder:'주소' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="form_item">
              <InputBox :option="{ value:'LG유플러스 상암사옥', placeholder:'주소' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ value:'01011111111', placeholder:'휴대폰 번호 입력' }" @inputValue="console.log($event)" />
            </div>    
            <div class="error">휴대폰 번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">비밀번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ type:'password', placeholder:'10~20자의 영문, 숫자 조합' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">비밀번호를 다시 확인해주세요</div>
            <div class="error">비밀번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주민등록번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder:'앞 6자리 입력' }" @inputValue="console.log($event)" />
              <span class="mark_div">-</span>
              <InputBox :option="{ type:'password', placeholder:'뒤 7자리 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">주민등록번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">이메일</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder:'아이디' }" @inputValue="console.log($event)" />
              <span class="mark_div">@</span>
              <InputBox :option="{ placeholder:'도메인' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">이메일 형식을 확인해주세요</div>
          </div>

          <div class="form_group">
            <strong class="form_label">추천인 휴대폰번호</strong>
            <!-- Default 노출 -->
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">추천인 확인</button>
            </div>
            <div class="error">추천인 휴대폰번호를 입력해주세요.</div>
            <div class="error">입력하신 추천인은 알뜰폰닷컴 사용자가 아니므로 혜택을 받을 수 없습니다.</div>
            <div class="error">추천인과 피추천인의 휴대폰번호가 동일할 경우 혜택을 받을 수 없습니다.</div>

            <!-- 링크를 통해서 진입 시 노출 -->
            <div class="form_item">
              <InputBox :option="{ value:'010-12**-56**', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', disabled:true }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03" disabled>추천인 확인</button>
            </div>
          </div>

          <div class="form_group">
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder:'4자리 숫자', findNum:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">4자리 숫자를 입력 해주세요</div>
          </div>
        </div>

			</div> <!-- // section -->

			<div class="section">
        <h3 class="tit02">약관동의</h3>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all00" name="all">
            <label for="check_all00">전체 약관에 모두 동의합니다.</label>
            <button type="button"><span class="blind">약관 보기</span></button>
          </div>
        </div>

        <br>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all01" name="all">
            <label for="check_all01">전체 약관에 모두 동의합니다.</label>
          </div>
        </div>

        <br>

        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all02" name="all">
            <label for="check_all02"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_01" name="">
                    <label for="check_consent00_01">개인정보 수집·이용동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_02" name="">
                    <label for="check_consent00_02">개인정보 제3자 제공 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_03" name="">
                    <label for="check_consent00_03">고유식별정보 처리 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- // terms_consent -->

			</div> <!-- // section -->


      
      <div class="section">
        <h3 class="tit02">terms_consent</h3>

        <NuxtLink to="/guide/Accordion" target="blank">/guide/Accordion</NuxtLink> 으로 이동
      </div> <!-- // section -->

      

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import InputBox from '@/components/InputBox';
import TextareaBox from '@/components/TextareaBox';

export default {
  name: 'GuideForm',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },

      dataSelectList: this.frontData.selectList.payType,
    }
  },
  methods: {
    clickSelectListItem(targetData, $event){
      this[targetData] = this[targetData].map((a)=>{
        a.selected = ( a == $event ) ? true : false;
        return a;
      });
    },

    selectDeliveryRequest($event){
      this.deliveryRequestSelfInput = ($event.value==3) ? true : false;
      if( this.deliveryRequestSelfInput ){
        setTimeout(()=>{ this.$refs.deliveryRequestSelfInput.$refs.input.focus() }, 10);
      }
    },
    selectDomain($event){
      this.emailSelfInput = ( $event.value == 0 ) ? true : false;
      this.emailSelectDomain = $event.title;
      if( this.emailSelfInput ){
        setTimeout(()=>{ this.$refs.emailSelfInput.$refs.input.focus() }, 10);
      }
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
    TextareaBox,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>

<style>
.option_info p{font-weight:700;}
.option_info dl{display:flex; flex-wrap:wrap; margin:1rem 0 1rem;}
.option_info dt{flex: 0 0 12rem; color:red;}
.option_info dd{flex: 0 0 16rem;}
</style>