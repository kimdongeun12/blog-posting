import {useState} from 'react'
import styled from '@emotion/styled'

export default function inputPage() {
    // const [Email, setEmail] = useState('') // Email State 관리
    // const [Password, setPassword] = useState('') // Password State 관리

    
    const RegEmailCheck = (value) => {
        // 이메일 체크 함수
        const EmailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if(value.match(EmailRegExp) === null){
            setEmailMessage('이메일 주소를 다시 확인해주세요.')
        }else{
            setEmailMessage('')
        }
    }
    
    const RegPasswordCheck = (value) => {
        // 패스워드 체크 함수
        const PasswordRegExp = /([^ㄱ-ㅎㅏ-ㅣ가-힣]).{8,16}$/;

        if(value.match(PasswordRegExp) === null){
            setPasswordMessage('8-16자의 영문,숫자,특수 문자만 사용 가능합니다.')
        }else{
            setPasswordMessage('')
        }
    }

    const [Inputs, setInput] = useState({
        InputEmail : '',
        InputPassword : ''
    }) 
    // InputsState를 객체로 관리

    const [EmailMessage, setEmailMessage] = useState('');
    const [PasswordMessage, setPasswordMessage] = useState('');

    const { InputEmail , InputPassword } = Inputs; 
    // 객체로 관리한 key값을 다시 선언하여 꺼내기 쉽게 정리 Inputs.InputEmail => InputEmail
    
    const onChangeInput = (event) => {
        const { value, name } = event.target;
        // event 타겟의 value와 , name을 저장
        setInput({
            ...Inputs,
            [name] : value
        });
        
        if(name === 'InputEmail'){
            RegEmailCheck(value)
        }
        if(name === 'InputPassword'){
            RegPasswordCheck(value)
        }
    };

    const onClickClear = (event) => {
        const { name } = event.target.previousSibling;
        // event 타겟의 input의 name을 저장
        setInput({
            ...Inputs,
            [name] : ''
        });
    };
    

    const onClickLogin = () => {
        // let EmailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        // 이메일 정규식 @와 .이있고 2~3글자로 끝날때

        // let PasswordRegExp = /([^ㄱ-ㅎㅏ-ㅣ가-힣]).{8,16}$/;
        // 패스워드 정규식 한글 제외하고 8~16자
        
        
        // if(InputEmail.match(EmailRegExp) === null){
        //     setEmailMessage('이메일 주소를 다시 확인해주세요.')
        // }else{
        //     setEmailMessage('')
        // }

        // if(InputPassword.match(PasswordRegExp) === null){
        //     setPasswordMessage('8-16자의 영문,숫자,특수 문자만 사용 가능합니다.')
        // }else{
        //     setPasswordMessage('')
        // }
    }
    

    return (
        <>
            <Wrapper>
                <LogoWrap>
                    <Logo>잇츠로드</Logo>
                </LogoWrap>
                <InputBox>
                    <InputWrap>
                        <Input type="text" name='InputEmail' 
                        onChange={onChangeInput}
                        value={InputEmail}
                        />
                        <ClearBtn onClick={onClickClear}>지우기</ClearBtn>
                    </InputWrap>
                    <Error>{EmailMessage}</Error>
                </InputBox>
                <InputBox>
                    <InputWrap>
                        <Input type="password" name='InputPassword' 
                        onChange={onChangeInput}
                        value={InputPassword}
                        />
                        <ClearBtn onClick={onClickClear}>지우기</ClearBtn>
                    </InputWrap>
                    <Error>{PasswordMessage}</Error>
                </InputBox>
                <ButtonWrap>
                    <LoginButton onClick={onClickLogin}>로그인</LoginButton>
                </ButtonWrap>
                <LinkWrap>
                    <Link href=''>이메일 찾기</Link>
                    <Link href=''>비밀번호 찾기</Link>
                    <Link href=''>회원가입</Link>
                </LinkWrap>
                <ButtonWrap>
                    <KaKaoButton>카카오톡으로 로그인</KaKaoButton>
                </ButtonWrap>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 50px 80px;
    width: 640px;
    min-height: 100vh;
    background: url('/02/bg.png') center/cover;
`
const LogoWrap = styled.div`
    padding: 224px 0 144px;
    display: flex;
    justify-content: center;
    
`
const Logo = styled.h2`
    padding-top: 124px;
    font-size: 60px;
    color: #FFFFFF;
    background: url('/02/marker.png') no-repeat top center/100px;
`
const InputBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
const InputWrap = styled.div`
    position: relative;
`
const Input = styled.input`
    padding: 7px 0;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    border: 0 none;
    border-bottom: 1px solid #7D7D7D;
    background-color: transparent;
    color: #FFFFFF;
`
const ClearBtn = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    background: url('/02/delete.png') center/cover;
    text-indent: -9999px;
    transform: translateY(-50%);
    cursor: pointer;
`
const ButtonWrap = styled.div`
    & > button {
        padding: 19px 0;
        width: 100%;
        text-align: center;
        font-size: 26px;
        line-height: 38px;
        font-weight: bold;
        border-radius: 38px;
    }
`
const LoginButton = styled.button`
    display: block;
    color: #FFFFFF;
    background-color: rgba(245,43,110,0.5);
`
const LinkWrap = styled.div`
    padding: 38px 0 58px;
    text-align: center;
`
const Link = styled.a`
    padding: 0 30px;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    & + a {
        border-left: 2px solid #FFFFFF;
    }
`
const KaKaoButton = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    color: #FAE100;
    border: 2px solid #FAE100;
    &::before{
        content: "";
        display: inline-block;
        margin-right: 30px;
        width: 32px;
        height: 32px;
        background: url('/02/kakaotalk.png') no-repeat center/contain;
    }
`

const Error = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #FF1B6D;
`