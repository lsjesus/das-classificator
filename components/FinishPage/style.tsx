import styled from "@emotion/styled";

export const FinishDiv = styled.div({
    width: '100vw',
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

'& #image' : {
    width: '300px'
},

'& #mission' : {
    color: '#238662',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '30px'
},

'& #txt' : {
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '15px'
}
})