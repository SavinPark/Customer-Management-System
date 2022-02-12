import React, { Component } from 'react';
import './App.css';

// Material UI 적용
import Paper from '@material-ui/core/Paper';  // 컴포넌트의 외부를 감싸는 용도
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// CSS 사용하기 위해서
// import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@mui/material';

// Components
import Customer from './components/Customer';


// 화면이 줄어들더라도 Table의 크기를 1080px을 유지하면서 가로로 스크롤바가 생기도록 한다.
// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     ovrelflowX: 'auto'
//   },
//   table: {
//     minWidth: 1080
//   }
// })
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto'
//   },
//   table: {
//     minWidth: 1080
//   }
// }));

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1', // 이미지를 랜덤으로 보여주는 웹사이트 (크기: 64px * 64px)
    'name' : 'USER 1',
    'birthday' : 19700217,
    'gender' : 'Male',
    'job' : 'Father',
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'USER 2',
    'birthday' : 199710606,
    'gender' : 'Female',
    'job' : 'Mother',
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'USER 2',
    'birthday' : 199990315,
    'gender' : 'Female',
    'job' : 'Student',
  },
  {
    'id' : 4,
    'image' : 'https://placeimg.com/64/64/4',
    'name' : 'USER 2',
    'birthday' : 20000302,
    'gender' : 'Female',
    'job' : 'Student',
  },
]

function App () {

  // const classes = useStyles();  
  // const { classes } = this.props;

    return (
      // Tip! : [ Ctrl + 컴포넌트 ]를 클릭하면 해당 컴포넌트로 이동한다.
      // <Paper className={classes.root}>
      //   <Table className={classes.table}>
      <Paper>
        <Table>
          {/* Table의 속성 */}
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          {/* Table의 내용 */}
          <TableBody>
            {// Customer 컴포넌트
              customers.map(c => {
                return(
                  <Customer 
                    // map을 사용할 경우 각 요소에 고유한 key값을 지정해주어야 한다.
                    key={c.id}
                    // props 전달
                    id = {c.id}
                    image = {c.image}
                    name ={c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                    job = {c.job}
                  /> 
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>

    );

}


// 위에서 정의한 styles를 적용하여 내보내기
// export default withStyles(styles)(App);
export default App;
