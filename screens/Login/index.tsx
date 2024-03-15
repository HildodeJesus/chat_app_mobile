import * as S from "./styles";
import Logo from "../../components/Logo";
import { useState } from "react";

export default function Login() {
	const [currentNumber, setCurrentNumber] = useState("");

	const formatNumber = (text: string) => {
		let numberPhoneWithDDD = text;
		if (numberPhoneWithDDD.length == 11) {
			const numbers = text.split("");
			const ddd = numbers[0] + numbers[1];
			let numberPhone = "";
			for (let i = 2; i < numbers.length; i++) {
				numberPhone += numbers[i];
			}

			numberPhoneWithDDD = `(${ddd}) ${numberPhone}`;
		}

		setCurrentNumber(numberPhoneWithDDD);
	};

	return (
		<S.Container>
			<Logo size={70} />
			<S.WelcomeText>Bem-vindo(a) ao whatsapp</S.WelcomeText>
			<S.InfoText>
				Informe seu número de celular com ddd para enviarmos o seu código de
				confirmação
			</S.InfoText>
			<S.Input
				onChangeText={formatNumber}
				value={currentNumber}
				keyboardType="numeric"
			/>
			<S.InfoText>
				Assim que continuar, você concorda com a{" "}
				<S.StrongText>Politica de Privacidade</S.StrongText> e{" "}
				<S.StrongText>Termos</S.StrongText> da nossa comunidade.
			</S.InfoText>

			<S.ButtonSubmit>
				<S.ButtonSubmitText>Continue</S.ButtonSubmitText>
			</S.ButtonSubmit>
		</S.Container>
	);
}
