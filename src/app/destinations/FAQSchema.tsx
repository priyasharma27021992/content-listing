export default function FAQSchema({
	slug,
	faq,
}: {
	slug: string;
	faq: { question: string; answer: string }[];
}) {
	if (!faq?.length) return null;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
		about: {
			'@type': 'Place',
			name: slug,
		},
	};

	return (
		<script
			type='application/ld+json'
			// Next recommended pattern for JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
