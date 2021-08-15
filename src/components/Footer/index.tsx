import Link from 'next/link'
import styles from './styles.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerContent}>
				<p>
					Made by{' '}
					<Link href="https://rodrigofernand.es">
						<a target="_blank">Rodrigo Fernandes</a>
					</Link>
					. Posts are only for display purposes.
				</p>
			</div>
		</footer>
	)
}
