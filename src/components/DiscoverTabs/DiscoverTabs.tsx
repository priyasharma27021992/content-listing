const DiscoverTabs = () => {
	const tabData = {
		Zakopane: {
			image: {
				src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
				alt: 'Zakopane Scene',
			},
		},
		Kolobrzeg: {
			image: {
				src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
				alt: 'Kolobrzeg Scene',
			},
		},
		Gdansk: {
			image: {
				src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
				alt: 'Gdansk Scene',
			},
		},
		Krakow: {
			image: {
				src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_340,q_45,w_356/https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg.jpeg',
				alt: 'Gdansk Scene',
			},
		},
	};
	return (
		<section>
			<Tabs>
				<TabsList>
					<TabsTrigger value='Zakopane'>Zakopane</TabsTrigger>
					<TabsTrigger value='Kolobrzeg'>Kolobrzeg</TabsTrigger>
					<TabsTrigger value='Gdansk'>Gdansk</TabsTrigger>
					<TabsTrigger value='Krakow'>Krakow</TabsTrigger>
				</TabsList>
				<TabsContent value=''>
					<Card>
						<CardHeader>
							<CardTitle></CardTitle>
							<CardDescription></CardDescription>
						</CardHeader>
						<CardContent></CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	);
};

export { DiscoverTabs };
