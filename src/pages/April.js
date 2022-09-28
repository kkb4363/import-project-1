import {Link} from 'react-router-dom';
import {AiOutlineLeft,AiOutlineRight ,AiTwotoneCalendar} from "react-icons/ai";
import styled from 'styled-components';
import '../css/style.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Arrow = {color:'#696969',
            fontSize:'22px',
            marginTop:'25px'};
const Graytext = {color:'#A9A9A9',opacity:0.7};
const GrayColor = 'rgba(52, 52, 52, 0.9)';
const Weekend = {backgroundColor: 'rgba(52, 52, 52, 0.4)'                   
};
const Yoil = styled.div`
display:flex;
width:1000px;
justify-content:space-around;
span{
    font-size:13px;
    opacity:0.7;
    color:white;
    margin-bottom:10px;
    margin-top:-10px;
}`;
const Header = styled.div`
display:flex;
`;
const Week = styled.div`
width:1000px;
height:119px;
display:flex;
border: 1px solid ${GrayColor};
`;
const Day = styled.div`
width:150px;
height:120px;
border-right:1px solid ${GrayColor};
display:flex;
align-items:flex-start;
justify-content:flex-end;
color:white;
span{
    margin-top:5px;
    margin-right:10px;
    position:relative;
}
h5{
        position:absolute;
        margin-top:100px;
        opacity:0.5;    
}`;
const Hr = styled.div`
display:flex;
div:first-child{
    width:8%;
    height:3px;
    margin-top:8px;
    background-color:white;
}
div:last-child{
    width:92%;
    height:3px;
    margin-top:8px;
    background-color:${GrayColor};
}
`;
const Nav = styled.div`
display:flex;
span{
    margin-left:5px;
    color:white;
    font-size:18px;
}`;
const RedText = styled.p`
display:flex;
margin-top:30px;
margin-right:-20px;
color:tomato;
`;
const RedDay = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:25px;
height:25px;
border-radius:12.5px;
background-color:tomato;
margin-top:5px;
margin-right:6px;
`

const April = () => {
    const [isLoading, setisLoading] = useState(true)
    const [data,setdata] = useState([]);
    const [holiday,setholiday] = useState([]);

    {/* 양,음력 api 받아오기 */}
    useEffect(()=>{
        axios.get(`https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?numOfRows=31&solYear=2022&solMonth=04&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI/mxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG/QQQ==`)
        .then((res) => {
            setdata(res.data.response.body.items.item);
        })
    },)
    
    {/* 특일 api 받아오기 */}
    useEffect(()=>{
        axios.get(`https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=2022&solMonth=04&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI%2FmxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG%2FQQQ%3D%3D`)
        .then((res)=>{
            setholiday(res.data.response.body.items.item);
            console.log(holiday);
            setisLoading(false);
        })
    },)
    
     {/* api 받아오는 동안 Loading 출력 */}
     if(isLoading){
        return <h1 style={{color:'white'}}>
        <div>로딩중입니다 잠시만 기다려주세요.</div>
        </h1>
    }
    
    return(
        <div>
            <Nav>
                <span><AiTwotoneCalendar/> 캘린더  보기</span>
            </Nav>
            
            <Hr>
            <div></div>
            <div></div>
            </Hr>

            <h2 style={{
                color:'#A9A9A9' ,
                marginBottom:'-7px',
                marginTop:'15px',
                opacity:0.5
                }}>제목 없음</h2>

            <Header>
                <h5 style={{
                    color:'white',
                    fontSize:'16px'}}>2022년 4월
                </h5>

                <Link style={{marginLeft:'820px',marginRight:'8px'}} to='/March'>
                    <AiOutlineLeft style={Arrow}/>
                </Link>
                <h5 style={{
                    color:'white',
                    fontSize:'15px'}}> 오늘 
                </h5>
                <Link style={{marginLeft:'8px'}} to='/May'>
                    <AiOutlineRight style={Arrow}/>
                </Link>
            </Header>
            <main>
                <Yoil>
                    <span style={Graytext}>일</span>
                    <span style={Graytext}>월</span>
                    <span style={Graytext}>화</span>
                    <span style={Graytext}>수</span>
                    <span style={Graytext}>목</span>
                    <span style={Graytext}>금</span>
                    <span style={Graytext}>토</span>
                </Yoil>
                    <Week>
                        <Day style={Weekend}>
                            <span style={Graytext}>27</span></Day>
                        <Day><span style={Graytext}>28</span></Day>
                        <Day><span style={Graytext}>29</span></Day>
                        <Day>
                            <span style={Graytext}>30</span>
                        </Day>
                        <Day>
                            <span style={Graytext}>31</span></Day>
                        <Day>
                            <span>4월 1일</span>
                        </Day>
                        <Day style={Weekend}>
                            <span>{data[1]?.solDay}</span>
                            <h5>{data[1]?.lunMonth}월{data[1]?.lunDay}일</h5>
                        </Day>
                    </Week>
                    <Week>
                        <Day style={Weekend}>
                            <span>{data[2]?.solDay}</span>
                            <h5>{data[2]?.lunMonth}월{data[2]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[3]?.solDay}</span>
                            <h5>{data[3]?.lunMonth}월{data[3]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[4]?.solDay}</span>
                            <h5>{data[4]?.lunMonth}월{data[4]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[5]?.solDay}</span>
                            <h5>{data[5]?.lunMonth}월{data[5]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[6]?.solDay}</span>
                            <h5>{data[6]?.lunMonth}월{data[6]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[7]?.solDay}</span>
                            <h5>{data[7]?.lunMonth}월{data[7]?.lunDay}일</h5>
                        </Day>
                        <Day style={Weekend}>
                        <span>{data[8]?.solDay}</span>
                            <h5>{data[8]?.lunMonth}월{data[8]?.lunDay}일</h5>
                        </Day>
                    </Week>
                    <Week>
                        <Day style={Weekend}>
                            <span>{data[9]?.solDay}</span>
                            <h5>{data[9]?.lunMonth}월{data[9]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[10]?.solDay}</span>
                            <h5>{data[10]?.lunMonth}월{data[10]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[11]?.solDay}</span>
                            <h5>{data[11]?.lunMonth}월{data[11]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[12]?.solDay}</span>
                            <h5>{data[12]?.lunMonth}월{data[12]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[13]?.solDay}</span>
                            <h5>{data[13]?.lunMonth}월{data[13]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[14]?.solDay}</span>
                            <h5>{data[14]?.lunMonth}월{data[14]?.lunDay}일</h5>
                        </Day>
                        <Day style={Weekend}>
                            <span>{data[15]?.solDay}</span>
                            <h5>{data[15]?.lunMonth}월{data[15]?.lunDay}일</h5>
                        </Day>
                    </Week>
                    <Week>
                        <Day style={Weekend}>
                            <span>{data[16]?.solDay}</span>
                            <h5>{data[16]?.lunMonth}월{data[16]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[17]?.solDay}</span>
                            <h5>{data[17]?.lunMonth}월{data[17]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[18]?.solDay}</span>
                            <h5>{data[18]?.lunMonth}월{data[18]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[19]?.solDay}</span>
                            <h5>{data[19]?.lunMonth}월{data[19]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[20]?.solDay}</span>
                            <h5>{data[20]?.lunMonth}월{data[20]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[21]?.solDay}</span>
                            <h5>{data[21]?.lunMonth}월{data[21]?.lunDay}일</h5>
                        </Day>
                        <Day style={Weekend}>
                            <span>{data[22]?.solDay}</span>
                            <h5>{data[22]?.lunMonth}월{data[22]?.lunDay}일</h5>
                        </Day>
                    </Week>
                    <Week>
                        <Day style={Weekend}>
                            <span>{data[23]?.solDay}</span>
                            <h5>{data[23]?.lunMonth}월{data[23]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[24]?.solDay}</span>
                            <h5>{data[24]?.lunMonth}월{data[24]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[25]?.solDay}</span>
                            <h5>{data[25]?.lunMonth}월{data[25]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[26]?.solDay}</span>
                            <h5>{data[26]?.lunMonth}월{data[26]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[27]?.solDay}</span>
                            <h5>{data[27]?.lunMonth}월{data[27]?.lunDay}일</h5>
                        </Day>
                        <Day>
                            <span>{data[28]?.solDay}</span>
                            <h5>{data[28]?.lunMonth}월{data[28]?.lunDay}일</h5>
                        </Day>
                        <Day style={Weekend}>
                            <span>{data[29]?.solDay}</span>
                            <h5>{data[29]?.lunMonth}월{data[29]?.lunDay}일</h5>
                        </Day>
                    </Week>
            </main>
        </div>
        )}
export default April;