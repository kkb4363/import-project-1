import {Link} from 'react-router-dom';
import {AiOutlineLeft,AiOutlineRight ,AiTwotoneCalendar} from "react-icons/ai";
import styled from 'styled-components';
import '../css/style.css';

const Arrow = {color:'#696969',
            fontSize:'22px',
            marginTop:'25px'};
const Graytext = {color:'#A9A9A9',opacity:0.7};
const GrayColor = 'rgba(52, 52, 52, 0.9)';
const SunSatur = {backgroundColor: 'rgba(52, 52, 52, 0.4)'};

const Yoil = styled.div`
display:flex;
width:1000px;
justify-content:space-around;
span{
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
    margin-right:7px;
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
const RedCircleSpan = {position:'relative',zIndex:2};
const RedCircle = styled.div`
z-index:1;
width:24px;
height:24px;
border-radius:12px;
background-color:tomato;
position:absolute;
margin-top:4px;
display:flex;
margin-right:3px;
`;

const Home = () => {
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
                    fontSize:'16px'}}>2022년 9월
                </h5>

                <Link style={{marginLeft:'850px',marginRight:'8px'}} to='/Prev'>
                    <AiOutlineLeft style={Arrow}/>
                </Link>
                <h5 style={{
                    color:'white',
                    fontSize:'15px'}}> 오늘 
                </h5>
                <Link style={{marginLeft:'8px'}} to='/Next'>
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
                        <Day style={SunSatur}><span style={Graytext}>28</span></Day>
                        <Day><span style={Graytext}>29</span></Day>
                        <Day><span style={Graytext}>30</span></Day>
                        <Day><span style={Graytext}>31</span></Day>
                        <Day><span>9월 1일</span></Day>
                        <Day><span>2</span></Day>
                        <Day style={SunSatur}><span>3</span></Day>
                    </Week>
                    <Week>
                        <Day style={SunSatur}>
                            <span style={RedCircleSpan}>4</span>
                            <RedCircle/>
                        </Day>
                        <Day><span>5</span></Day>
                        <Day><span>6</span></Day>
                        <Day><span>7</span></Day>
                        <Day><span>8</span></Day>
                        <Day><span style={RedCircleSpan}>9</span>
                        <RedCircle/>
                        </Day>
                        <Day style={SunSatur}>
                        <RedText>추석</RedText>
                        <span style={RedCircleSpan}>10</span>
                        <RedCircle/>
                        </Day>
                    </Week>
                    <Week>
                        <Day style={SunSatur}><span 
                        style={RedCircleSpan}>11</span>
                        <RedCircle/>
                        </Day>
                        <Day>
                            <RedText>대체 휴일</RedText>
                            <span style={RedCircleSpan}>12</span>
                        <RedCircle/>
                        </Day>
                        <Day><span>13</span></Day>
                        <Day><span>14</span></Day>
                        <Day><span>15</span></Day>
                        <Day><span>16</span></Day>
                        <Day style={SunSatur}><span>17</span></Day>
                    </Week>
                    <Week>
                        <Day style={SunSatur}><span
                        style={RedCircleSpan}>18</span>
                        <RedCircle/>
                        </Day>
                        <Day><span>19</span></Day>
                        <Day><span>20</span></Day>
                        <Day><span>21</span></Day>
                        <Day><span>22</span></Day>
                        <Day><span>23</span></Day>
                        <Day style={SunSatur}><span>24</span></Day>
                    </Week>
                    <Week>
                        <Day style={SunSatur}><span style={RedCircleSpan}>25</span>
                        <RedCircle/>
                        </Day>
                        <Day><span>26</span></Day>
                        <Day><span>27</span></Day>
                        <Day><span>28</span></Day>
                        <Day><span>29</span></Day>
                        <Day><span>30</span></Day>
                        <Day style={SunSatur}><span style={Graytext}>10월 1일</span></Day>
                    </Week>
            </main>
        </div>
        )}
export default Home;