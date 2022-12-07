import styled from '@emotion/styled'

export const ClassificationStyle = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    width: '100vw',
    height: '85vh',
    margin: '0 auto',

'& .boxFormat' : {
    width: '615px',
    height: '360px',
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
},

'& .profileImg' : {
    width:'70%',
    maxWidth:'250px',
    margin:'30px'
},

'& infos' : {
    display: 'flex',
    flexDirection: 'row',
},

'& .textInfos' : {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px 20px 40px 10px'
},

'& .infoTitle' : {
    fontSize: '20px',
    fontWeight: 'bolder',
    margin: '0'
},

'& .userInfo' : {
    margin: '0',
    fontSize: '16px',
    fontWeight: '400'
},

'& .icons' : {
    display: 'flex',
    flexDirection: 'column',
    gap:'52px'
},

'& #dicas' : {
    marginTop:'30px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
},

'& .txtDica' : {
    width: '400px',
    fontWeight: '400'
},

'& #txtDir' : {
    textAlign: 'right'
}
})