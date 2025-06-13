import styles from "./decision5.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { cards } from "../dataTask5";

function Decision5() {
	return ( 
		<div className={styles.wrapper}>
			<div className={styles.container}>	
				<div className={styles.cards}>
					{cards?.map((card) => (
						<ItemCard
							key={card.id}
							label={card.label}
							link={card.link}
							translate={card.translate}
							title={card.title}
							text={card.text}
							url={card.url}
						/>
					))}
				</div>
			</div>
		</div>
	 );
}

export default Decision5;