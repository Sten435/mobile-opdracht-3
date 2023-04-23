export const meetupInitState = {
	meetups: [
		{
			title: 'This is a first meetup',
			address: 'Meetupstreet 1, 12345 Meetup City',
			description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
			favorite: false,
		},
		{
			title: 'Join us for the second meetup',
			address: 'Meetupstreet 2, 12345 Meetup City',
			description: "Our second meetup is going to be even better than the first one! Don't miss it!",
			favorite: true,
		},
		{
			title: "Let's meet up again",
			address: 'Meetupstreet 3, 12345 Meetup City',
			description: "After the success of our first two meetups, we're excited to host another one. Join us for a night of fun and networking!",
			favorite: false,
		},
		{
			title: 'Discover new opportunities',
			address: 'Meetupstreet 4, 12345 Meetup City',
			description: 'Are you looking to expand your horizons and meet new people? Come to our meetup and discover new opportunities!',
			favorite: true,
		},
	],
	selectedRoute: null,
};
