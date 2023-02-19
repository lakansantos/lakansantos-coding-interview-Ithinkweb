import React from 'react';
import {Container, Card} from 'reactstrap';

function Index() {
	return (
		<Container>
			<Card className='mt-5 p-5' style={{background: '#444', fontFamily: 'sans-serif', color: '#ecf0f1'}}>
				<img src="Lakan Santos myAvatar.png" alt="my avatar" width={'250px'} height={'250px'}/>
				<h1 className='display-4' style={{color: '#9DECF9', fontWeight: 'bold'}}>Lakan Santos</h1>
				<p>
					Hello, my name is <span style={{fontWeight: 'bold', color: '#9DECF9'}}>Lakan Santos</span> and I am a web developer that specializes in frontend development.
					I am constantly learning and adapting new information especially in ReactJS. 
					I am very excited and looking forward to working with you and be part of team's future success.
					Thank you again for considering me for this interview. 
				</p>
				<p  style={{color: '#c5c9ca'}}>You can see my contacts below:</p>
				<address>
					<a href='mailto:email@address.com'  style={{color: '#c5c9ca'}}>lakansantos250@gmail.com</a>
					<br />
					<a href='tel:+635552368'  style={{color: '#c5c9ca'}}>(+63) 9659638563</a>
					<div className="logos-container-main">
						<a href="https://www.linkedin.com/in/lakan-santos/" target={'_blank'}  rel="noreferrer">
							<img src="linkedin.png" alt="" width={'50px'} height={'50px'}/>
						</a>
						<a href="https://github.com/lakansantos" target={'_blank'}  rel="noreferrer" >
							<i className="bi bi-github" style={{color: 'white', fontSize: '40px'}} width={'50px'} height={'50px'}></i>
						</a>
					</div>
				</address>
			</Card>
		</Container>
	);
}

export default Index;
