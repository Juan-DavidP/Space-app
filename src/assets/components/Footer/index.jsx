import { styled } from 'styled-components';

const FooterEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
`;

const FooterTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Footer() {
	return (
		<FooterEstilizado>
			<IconoContainer>
				<li>
					<a href="#">
						<img src="/redes/facebook.svg" alt="" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/redes/twitter.svg" alt="" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/redes/instagram.svg" alt="" />
					</a>
				</li>
			</IconoContainer>
			<FooterTexto>Desarrollado por Juan Pelaez.</FooterTexto>
		</FooterEstilizado>
	);
}

export default Footer
