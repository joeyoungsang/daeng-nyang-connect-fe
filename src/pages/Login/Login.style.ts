import styled from 'styled-components';

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
}

export const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	overflow-x: hidden;
`;

export const LoginDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const LoginTitleDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 427px;
	height: 150px;
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 16px;
	color: var(--color-deep-blue);
	line-height: 39.69px;
`;

export const LoginInput = styled.input<ResponsiveProps>`
	width: ${(props) => (props.$isMobile ? '70%' : '100%')};
	height: 40px;
	margin-bottom: 16px;
	border: none;
	padding-left: 16px;
	font-size: 16px;
	box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	&:hover {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
	}
	&:focus {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
		outline: none;
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const LoginButton = styled.button<ResponsiveProps>`
	background-color: rgba(227, 155, 166, 0.9);
	color: white;
	padding: 8px, 52px, 8px, 52px;
	width: ${(props) => (props.$isMobile ? '70%' : '100%')};
	height: 42px;
	font-size: 20px;
	font-weight: 400;
	border-radius: 10px;
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);

	&:hover {
		cursor: pointer;
		background-color: rgba(227, 155, 166, 1);
	}
`;

export const SignUpDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;
	height: 50px;
`;

export const SignUpButton = styled.button`
	color: var(--color-teal);
	&:hover {
		cursor: pointer;
		color: var(--color-deep-blue);
	}
`;

export const Logo = styled.img<ResponsiveProps>`
	width: ${(props) => (props.$isMobile ? '150px' : '150px')};
	height: ${(props) => (props.$isMobile ? '150px' : '150px')};
`;

export const Paragraph = styled.p`
	margin-top: -10px;
	margin-bottom: 5px;
	width: 90%;
	text-align: left;
	font-size: 12px;
	color: tomato;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 300px;
	padding-top: 10px;
`;

export const Button = styled.button`
	width: 45px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 50%;
	background-color: transparent;
	cursor: pointer;
	box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
	width: 45px;
`;