angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('AqidahCtrl',
	function($scope){
	$scope.aqidah = [
	  { title: 'Agama Islam', id: 1},
	  { title: 'Rukun dan Makna Islam', id: 2},
	  { title: 'Penjelasan Ringkas Rukun Islam 1', id: 3},
	  { title: 'Penjelasan Ringkas Rukun Islam 2', id: 4},
	  { title: 'Islam, Iman dan Ihsan', id: 5},
	  { title: 'Agama Islam untuk Seluruh Manusia', id: 6},
	  { title: 'Syarat Syahadat La ilaha illallah', id: 7},
	  { title: 'Tiga Pokok Ajaran Islam', id: 8},
	  { title: 'Empat Kaidah Utama Tauhid', id: 9},
	  { title: 'Agar Ibadah Diterima di Sisis Allah', id: 10},
	  { title: 'Awas Syirik!', id: 11},
	  { title: 'Iman Kepada Allah', id: 12},
	  { title: 'Iman Kepada Malaikat', id: 13},
	  { title: 'Iman Kepada Kitab Allah', id: 14},
	  { title: 'Iman Kepada Utusan Allah', id: 15},
	  { title: 'Iman Kepada Hari Akhir', id: 16},
	  { title: 'Iman Kepada Takdir', id: 17},
	];
})

.controller('AkidahCtrl',
	function($scope, $stateParams){
	
})
