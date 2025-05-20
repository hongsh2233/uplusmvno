<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form</div>

			<div class="section">
				<h3 class="tit02">input</h3>

				<div class="form_group">
          <div class="form_item">
            <div class="input_box w220">
              <input type="text" class="input" placeholder="고객명" ref="input1" v-model="input.input1">
					    <button type="button" class="btn_del" v-if="input.input1" @click="input.input1=null; $refs.input1.focus()"><span class="blind">입력 내용 삭제</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box w220">
              <input type="text" class="input" placeholder="고객명" disabled ref="input2" v-model="input.input2">
					    <button type="button" class="btn_del" v-if="input.input2" @click="input.input2=null; $refs.input2.focus()"><span class="blind">입력 내용 삭제</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box w220">
              <input type="text" class="input" placeholder="고객명" readonly ref="input3" v-model="input.input3">
					    <button type="button" class="btn_del" v-if="input.input3" @click="input.input3=null; $refs.input3.focus()"><span class="blind">입력 내용 삭제</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box">
              <input type="text" class="input" placeholder="검색어를 입력해주세요" ref="input4" v-model="input.input4">
              <button type="button" class="btn_del" v-if="input.input4" @click="input.input4=null; $refs.input4.focus()"><span class="blind">입력 내용 삭제</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box search">
              <input type="text" class="input" placeholder="검색어를 입력해주세요" ref="input5" v-model="input.input5">
              <button type="button" class="btn_del" v-if="input.input5" @click="input.input5=null; $refs.input5.focus()"><span class="blind">입력 내용 삭제</span></button>
              <button type="button" class="btn_search"><span class="blind">검색</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box search find_num">
              <div class="num_mark">010-<span>****</span>-</div>
              <input type="text" class="input" placeholder="4자리 숫자" ref="input6" v-model="input.input6">
              <button type="button" class="btn_del" v-if="input.input6" @click="input.input6=null; $refs.input6.focus()"><span class="blind">입력 내용 삭제</span></button>
              <button type="button" class="btn_search"><span class="blind">검색</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box search find_num">
              <div class="num_mark">010-<span>****</span>-</div>
              <input type="text" class="input" placeholder="4자리 숫자" disabled ref="input7" v-model="input.input7">
              <button type="button" class="btn_del" v-if="input.input7" @click="input.input7=null; $refs.input7.focus()"><span class="blind">입력 내용 삭제</span></button>
              <button type="button" class="btn_search" disabled><span class="blind">검색</span></button>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box auth_num">
              <input type="text" class="input" ref="input8" v-model="input.input8">
              <button type="button" class="btn_del" v-if="input.input8" @click="input.input8=null; $refs.input8.focus()"><span class="blind">입력 내용 삭제</span></button>
              <div class="timer">
                <span>0:01</span>
                <button type="button">시간연장하기</button>
              </div>
            </div>
          </div>
          <div class="form_item">
            <div class="input_box auth_num">
              <input type="text" class="input" disabled ref="input9" v-model="input.input9">
              <button type="button" class="btn_del" v-if="input.input9" @click="input.input9=null; $refs.input9.focus()"><span class="blind">입력 내용 삭제</span></button>
              <div class="timer">
                <span>0:01</span>
                <button type="button" disabled>시간연장하기</button>
              </div>
            </div>
          </div>
        </div>

			</div> <!-- // section -->

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
				<h3 class="tit02">FormSelect</h3>

        <div class="form_group">
          <strong class="form_label">현재 요금납부방법을 선택해주세요</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_payType" @click="$refs.payType.open">선택하세요</button>
          </div>
          <PopupSelect ref="payType" :option="{ data:'payType', popupTitle:'선택', targetBtn:'btn_payType' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <strong class="form_label">알뜰폰 통신사</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">선택</button>
          </div>
          <PopupSelect ref="MVNO" :option="{ data:'MVNO', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <strong class="form_label">배송 시 요청사항 (선택)</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_deliveryRequest" @click="$refs.deliveryRequest.open">배송 시 요청사항 선택하기</button>
          </div>
          <div class="form_item" v-if="deliveryRequestSelfInput">
            <InputBox :option="{ placeholder:'40글자 이내로 입력' }" @inputValue="console.log($event)" ref="deliveryRequestSelfInput" />
          </div>
          <PopupSelect ref="deliveryRequest" :option="{ data:'deliveryRequest', popupTitle:'배송 시 요청사항 선택', targetBtn:'btn_deliveryRequest' }" @selectItem="selectDeliveryRequest($event)" />
        </div>


			</div> <!-- // section -->



			<div class="section">
        <h3 class="tit02">textarea</h3>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요"></textarea>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" disabled></textarea>
        <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" readonly></textarea>
      </div>

      <div class="section">
        <h3 class="tit02">TextareaBox ty01</h3>
        <TextareaBox :data="dataTextarea1" @textareaValue="console.log($event)" @textareaSubmit="console.log($event)" />
        <TextareaBox :data="dataTextarea2" @textareaValue="console.log($event)" @textareaSubmit="console.log($event)" />
        <TextareaBox :data="dataTextarea3" @textareaValue="console.log($event)" @textareaSubmit="console.log($event)" />

        <h3 class="tit02">TextareaBox ty02</h3>
        <TextareaBox :data="dataTextarea4" @textareaValue="console.log($event)" @textareaSubmit="console.log($event)" />
        <TextareaBox :data="dataTextarea5" @textareaValue="console.log($event)" @textareaSubmit="console.log($event)" />
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
            <strong class="form_label">수령인</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" ref="input10" v-model="input.input10">
                <button type="button" class="btn_del" v-if="input.input10" @click="input.input10=null; $refs.input10.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" ref="input11" v-model="input.input11">
                <button type="button" class="btn_del" v-if="input.input11" @click="input.input11=null; $refs.input11.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="text" class="input" placeholder="고객명" ref="input12" v-model="input.input12">
                <button type="button" class="btn_del" v-if="input.input12" @click="input.input12=null; $refs.input12.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">고객명을 입력해 주세요</div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <div class="input_box search">
                <input type="text" class="input" placeholder="검색어를 입력해주세요" ref="input13" v-model="input.input13">
                <button type="button" class="btn_del" v-if="input.input13" @click="input.input13=null; $refs.input13.focus()"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
            </div>
            <div class="error">검색어를 입력 해주세요</div>
          </div>


          <div class="form_group">
            <div class="form_item">
              <div class="input_box search">
                <input type="text" class="input" placeholder="검색어를 입력해주세요" ref="input14" v-model="input.input14">
                <button type="button" class="btn_del" v-if="input.input14" @click="input.input14=null; $refs.input14.focus()"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
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
              <div class="input_box search">
                <input type="text" class="input" placeholder="검색어를 입력해주세요" ref="input15" v-model="input.input15">
                <button type="button" class="btn_del" v-if="input.input15" @click="input.input15=null; $refs.input15.focus()"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            
            <div class="form_item">
                <div class="input_box">
                  <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" ref="input16" v-model="input.input16">
                  <button type="button" class="btn_del" v-if="input.input16" @click="input.input16=null; $refs.input16.focus()"><span class="blind">입력 내용 삭제</span></button>
                </div>
                <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" ref="input17" v-model="input.input17">
                <button type="button" class="btn_del" v-if="input.input17" @click="input.input17=null; $refs.input17.focus()"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" ref="input18" v-model="input.input18">
                <button type="button" class="btn_del" v-if="input.input18" @click="input.input18=null; $refs.input18.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <div class="input_box auth_num">
                <input type="text" class="input" ref="input19" v-model="input.input19">
                <button type="button" class="btn_del" v-if="input.input19" @click="input.input19=null; $refs.input19.focus()"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
                <div class="input_box">
                  <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" ref="input20" v-model="input.input20">
                  <button type="button" class="btn_del" v-if="input.input20" @click="input.input20=null; $refs.input20.focus()"><span class="blind">입력 내용 삭제</span></button>
                </div>
                <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" ref="input21" v-model="input.input21">
                <button type="button" class="btn_del" v-if="input.input21" @click="input.input21=null; $refs.input21.focus()"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
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
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" ref="input22" v-model="input.input22">
                <button type="button" class="btn_del" v-if="input.input22" @click="input.input22=null; $refs.input22.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item val_chk">
              <div class="input_box auth_num">
                <input type="text" class="input" ref="input23" v-model="input.input23">
                <button type="button" class="btn_del" v-if="input.input23" @click="input.input23=null; $refs.input23.focus()"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button">시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="tel" class="input" placeholder="'-'없이 숫자만 입력" disabled ref="input24" v-model="input.input24">
                <button type="button" class="btn_del" v-if="input.input24" @click="input.input24=null; $refs.input24.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03" disabled>인증 재요청</button>
            </div>
            <div class="form_item">
              <div class="input_box auth_num">
                <input type="text" class="input" disabled ref="input25" v-model="input.input25">
                <button type="button" class="btn_del" v-if="input.input25" @click="input.input25=null; $refs.input25.focus()"><span class="blind">입력 내용 삭제</span></button>
                <div class="timer">
                  <span>0:01</span>
                  <button type="button" disabled>시간연장하기</button>
                </div>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주소</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="우편주소" ref="input26" v-model="input.input26">
                <button type="button" class="btn_del" v-if="input.input26" @click="input.input26=null; $refs.input26.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="주소" ref="input27" v-model="input.input27">
                <button type="button" class="btn_del" v-if="input.input27" @click="input.input27=null; $refs.input27.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="주소" ref="input28" v-model="input.input28">
                <button type="button" class="btn_del" v-if="input.input28" @click="input.input28=null; $refs.input28.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="tel" class="input" placeholder="휴대폰 번호 입력" ref="input29" v-model="input.input29">
                <button type="button" class="btn_del" v-if="input.input29" @click="input.input29=null; $refs.input29.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>    
            <div class="error">휴대폰 번호를 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">비밀번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="password" class="input" placeholder="10~20자의 영문, 숫자 조합" ref="input30" v-model="input.input30">
                <button type="button" class="btn_del" v-if="input.input30" @click="input.input30=null; $refs.input30.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">비밀번호를 다시 확인해주세요</div>
            <div class="error">비밀번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">주민등록번호</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="text" class="input" placeholder="앞 6자리 입력" ref="input31" v-model="input.input31">
                <button type="button" class="btn_del" v-if="input.input31" @click="input.input31=null; $refs.input31.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <span class="mark_div">-</span>
              <div class="input_box">
                <input type="password" class="input" placeholder="뒤 7자리 입력" ref="input32" v-model="input.input32">
                <button type="button" class="btn_del" v-if="input.input32" @click="input.input32=null; $refs.input32.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">주민등록번호를 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">이메일</strong>
            <div class="form_item val_chk">
              <div class="input_box">
                <input type="text" class="input" placeholder="아이디" ref="input33" v-model="input.input33">
                <button type="button" class="btn_del" v-if="input.input33" @click="input.input33=null; $refs.input33.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <span class="mark_div">@</span>
              <div class="input_box">
                <input type="text" class="input" placeholder="도메인" ref="input34" v-model="input.input34">
                <button type="button" class="btn_del" v-if="input.input34" @click="input.input34=null; $refs.input34.focus()"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">이메일 형식을 확인해주세요</div>
          </div>

          <div class="form_group">
            <div class="form_item val_chk">
              <div class="input_box search find_num">
                <div class="num_mark">010-<span>****</span>-</div>
                <input type="text" class="input" placeholder="4자리 숫자" ref="input35" v-model="input.input35">
                <button type="button" class="btn_del" v-if="input.input35" @click="input.input35=null; $refs.input35.focus()"><span class="blind">입력 내용 삭제</span></button>
                <button type="button" class="btn_search"><span class="blind">검색</span></button>
              </div>
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
import TextareaBox from '@/components/TextareaBox';

export default {
  name: 'GuideForm',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },

      deliveryRequestSelfInput:false,   //  배송시 요청사항 => 직접입력 선택

      input:{ input1: null, input2:null, input3:null, input4:null, input5:'김알파', input6:null, input7:null, input8:'322115', input9:'322115', input10:null, input11:'김알파', input12:null, input13:null, input14:'김알파', input15:'김알파', input16:null, input17:'322115', input18:'01011111111', input19:'322115', input20:'01011111111', input21:'322115', input22:'01011111111', input23:'322115', input24:'01011111111', input25:'322115', input26:null, input27:null, input28:'LG유플러스 상암사옥', input29:'01011111111', input30:null, input31:null, input32:null, input33:null, input34:null, input35:null },

      dataSelectList: this.frontData.selectList.payType,

      dataMVNO: this.frontData.select.MVNO,
      dataPayType: this.frontData.select.payType,
      dataDeliveryRequest: this.frontData.select.deliveryRequest,
      dataEmail: this.frontData.select.email,

      dataTextarea1: { type:'ty01', placeholder:'문의 내용을 입력해 주세요', value:'', rows: 1, maxlength: 1000, byteCheck: true, button: false, buttonValue:'',  disabled:false, readonly: false, },
      dataTextarea2: { type:'ty01', placeholder:'문의 내용을 입력해 주세요', value:'', rows: 1, maxlength: 1000, byteCheck: true, button: false, buttonValue:'', disabled:true, readonly: false, },
      dataTextarea3: { type:'ty01', placeholder:'문의 내용을 입력해 주세요', value:'', rows: 1, maxlength: 1000, byteCheck: true, button: false, buttonValue:'', disabled:false, readonly: true, },
      dataTextarea4: { type:'ty02', placeholder:'문의 내용을 입력해 주세요', value:'', rows: 1, maxlength: 50, byteCheck: true, button: false, buttonValue:'', disabled:false, readonly: false, },
      dataTextarea5: { type:'ty02', placeholder:'문의 내용을 입력해 주세요', value:'', rows: 1, maxlength: 50, byteCheck: true, button: true, buttonValue:'등록', disabled:false, readonly: false, },
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
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    TextareaBox,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
