import styles from './PageFooter.module.scss';
import React from 'react';

function PageFooter() {
	return (
		<footer className={styles['footer']}>
			<div className="footer-wrapper d-flex flex-column justify-content-center align-items-center gap-2">
				<p>Made and Designed by <a href="https://github.com/lakansantos" className='text-decoration-none' target={'_blank'} style={{color: '#9DECF9'}} >Lakan Santos</a></p>
				<a href="https://github.com/lakansantos/lakansantos-coding-interview-Ithinkweb" target={'_blank'}>
					<i className="bi bi-github" style={{color: 'white', fontSize: '40px'}}></i>
				</a>
				<p>&copy; 2023 </p>
			</div>
		</footer>
	)
}

export default PageFooter;
