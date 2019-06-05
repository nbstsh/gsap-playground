import React, { useRef, useEffect } from 'react';
import style from './TimelineMaxSample.module.scss';
import { TimelineMax } from 'gsap';

const CARD_WIDTH = 100;

const TimelineMaxSample = () => {
	const boxRef = useRef(null);
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);
	const returnRef = useRef(null);
	const tl = new TimelineMax({
		paused: true,
		onComplete() {
			console.log('Finish!!!');
		}
	});

	useEffect(() => {
		const boxWidth = boxRef.current.clientWidth;
		const distance = boxWidth - CARD_WIDTH;

		tl.to(card1Ref.current, 0.5, { x: distance });
		tl.to(card2Ref.current, 0.5, { x: distance * -1 }, '-= 0.5');
		tl.to(card3Ref.current, 0.5, { x: distance }, '-= 0.5');

		tl.to(card1Ref.current, 0.5, { x: 0 });
		tl.to(card2Ref.current, 0.5, { x: 0 }, '-= 0.5');
		tl.to(card3Ref.current, 0.5, { x: 0 }, '-= 0.5');

		tl.to(card1Ref.current, 0.5, { x: distance });
		tl.to(card2Ref.current, 0.5, { x: distance * -1 }, '-= 0.5');
		tl.to(card3Ref.current, 0.5, { x: distance }, '-= 0.5');

		tl.to(card1Ref.current, 0.5, { x: 0 });
		tl.to(card2Ref.current, 0.5, { x: distance / -2 }, '-= 0.5');
		// tl.to(card3Ref.current, 0.5, { x: 0 }, '-= 1');

		tl.to(card1Ref.current, 0.5, { scale: 1.2 });
		tl.to(card2Ref.current, 0.5, { scale: 1.2 });
		tl.to(card3Ref.current, 0.5, { scale: 1.2 });

		tl.to(
			card1Ref.current,
			0.5,
			{ scale: 1, rotation: 360, borderRadius: '50%' },
			'-= 0.5'
		);
		tl.to(card2Ref.current, 0.5, {
			scale: 1,
			rotation: 360,
			borderRadius: '50%'
		});
		tl.to(card3Ref.current, 0.5, {
			scale: 1,
			rotation: 360,
			borderRadius: '50%'
		});

		tl.to(card1Ref.current, 0.5, { scale: 15 });
		tl.to(card2Ref.current, 0.5, { scale: 15 }, '-=.3');
		tl.to(card3Ref.current, 0.5, { scale: 15 }, '-= 0.3');

		tl.to(returnRef.current, 0.5, { opacity: 1 });
	}, []);

	const onStartClick = () => {
		tl.play();
	};

	const onPauseClick = () => {
		tl.pause();
	};

	const onReturnClick = () => {
		tl.reverse();
	};

	return (
		<div>
			<h1>TimelineMaxSample</h1>
			<section className={style.box} ref={boxRef}>
				<div className={style.card} ref={card1Ref} />
				<div className={style.card} ref={card2Ref} />
				<div className={style.card} ref={card3Ref} />
			</section>
			<section className={style.btnBox}>
				<button className={style.start} onClick={onStartClick}>
					start
				</button>
				<button onClick={onPauseClick}>pause</button>
				<button
					className={style.return}
					onClick={onReturnClick}
					ref={returnRef}
				>
					reverse
				</button>
			</section>
		</div>
	);
};

export default TimelineMaxSample;
