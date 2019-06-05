import React, { useRef } from 'react';
import { TweenMax, Power2, TimelineLite, Bounce } from 'gsap/TweenMax';

import style from './TweenMaxSample.module.scss';

const TweenMaxSample = () => {
	const card1Ref = useRef(null);

	const onCard1Click = e => {
		TweenMax.to('#card1', 1, { scale: '1.2' });
		TweenMax.to(card1Ref.current, 1, {
			scale: '1.5',
			height: '300px',
			delay: 2
		});
	};
	const onCard2Click = e => {
		TweenMax.to('#card2', 1, { opacity: 1, y: 500 });
		TweenMax.to('#card2', 1, { scale: 2, delay: 1 });
	};
	const onCard3Click = e => {
		TweenMax.fromTo(
			'#card3',
			1,
			{ opacity: 0, x: 100, scale: 2 },
			{ opacity: 1, x: -100, y: 300 }
		);
	};
	const onCard4Click = e => {
		TweenMax.to('#card4', 1, { scale: '1.5', ease: Power2.easeInOut });
	};
	const onCard5Click = e => {
		TweenMax.to('#card5', 1, {
			scale: '1.5',
			boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 10px 0px',
			y: 30,
			rotation: 100,
			ease: Bounce.easeOut
		});
	};
	const onCard6Click = e => {
		TweenMax.from('#card6', 1, { opacity: 0, x: 100, y: 0 });
		TweenMax.to('#card6', 1, { y: 100, delay: 1 });
	};

	return (
		<div>
			<h1>sample</h1>
			<section className={style.box}>
				<div id='card1' className={style.card} ref={card1Ref} />
				<div id='card2' className={style.card} />
				<div id='card3' className={style.card} />
				<div id='card4' className={style.card} />
				<div id='card5' className={style.card} />
				<div id='card6' className={style.card} />
			</section>
			<ul className={style.list}>
				<li>
					<button onClick={onCard1Click}>card1</button>
				</li>
				<li>
					<button onClick={onCard2Click}>card2</button>
				</li>
				<li>
					<button onClick={onCard3Click}>card3</button>
				</li>
				<li>
					<button onClick={onCard4Click}>card4</button>
				</li>
				<li>
					<button onClick={onCard5Click}>card5</button>
				</li>
				<li>
					<button onClick={onCard6Click}>card6</button>
				</li>
			</ul>
		</div>
	);
};

export default TweenMaxSample;
