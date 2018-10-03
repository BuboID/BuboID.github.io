const API_BASE_URL = 'https://api.bubo.id'
// const API_BASE_URL = 'https://stage-api.bubo.id'
~
angular
  .module('bubo', [])
  .controller('bubo', function($scope, $http, $document) {

    var reqs = {
      method: 'POST',
      url: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'token'       : 'cPPS3S1h2NI:APA91bF24CQ5EySQO_MSKKAx1ReYIrGwTJ9Zb2ZD_ghLY8DeoImsAKoyUxNtqoZxSO5IcCM74G2mIWAMVpKSRPAU5gw1j8vbQ2_K9oeybNqA72_nrrvJngiRXQYU77e7habd9Ges6VEU'
    
      },
      data: {
        "to": [],
        "action": "bubo.sekolah",
        "params": {
        }
      }
     }

     
 

     
     $http(reqs).then(function(datas){
       console.log(datas);
       $scope.items = [];
       angular.forEach(datas.data.response.data, function(value, key) {
           $scope.items.push(value);
       });
       $scope.totalCount = datas.count;
       console.log($scope.items);
     });


    var bg = [
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',
      'https://images.unsplash.com/photo-1531003940920-a1398e6ab566?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fca91564d1c41251424a1a8919058fcc&auto=format&fit=crop&w=1534&q=80',

    ]
    $scope.register = false;
    $scope.switchRegister = function() {
      
      $scope.register = !$scope.register;
      console.log($scope.register)
    }
    $scope.page = {
      template: 'main',
      media: bg[Math.round(Math.random() * 1000) % bg.length]
    }    
    $scope.getCurrentPage = function() {
      return '/pages/' + $scope.page.template + '.html';
    }
    $scope.setBackground = function() {
      return $scope.page.media;
    }
    $scope.app = {
      title: 'bubo',
      subTitle: 'educate'
    }
    $scope.list = [];

 
  })

  .controller('register', function($scope, $http, $document) {
    $scope.account = {
      id: null,
      fullname: null,
      email: null
    }
    $scope.sebaran = {
      confirm: false,
      title: "",
      description: "",
      media: "",
      latlng: "",
      address: "",
      account: {
        uid: null,
        fullname: null,
        email: null
      }
    }
    $scope.mapUpdate = function(latlng){
      $scope.sebaran.latlng = latlng;
    }
    $scope.geoUpdate = function(address){
      $scope.sebaran.address = address.formatted_address;
    }
    $scope.step = {
      id: 1,
      error: "",
      one: function(){
        $scope.step.id++;
        $scope.sebaran.account.uid = document.getElementById("id").innerText;
        $scope.sebaran.account.fullname = document.getElementById("name").innerText;
        $scope.sebaran.account.email = document.getElementById("email").innerText;
        var reqs = {
          method: 'POST',
          url: API_BASE_URL,
          headers: {
            'Content-Type': 'application/json',
            'token'       : 'cPPS3S1h2NI:APA91bF24CQ5EySQO_MSKKAx1ReYIrGwTJ9Zb2ZD_ghLY8DeoImsAKoyUxNtqoZxSO5IcCM74G2mIWAMVpKSRPAU5gw1j8vbQ2_K9oeybNqA72_nrrvJngiRXQYU77e7habd9Ges6VEU'
        
          },
          data: {
            "to": [],
            "action": "bubo.sekolah",
            "params": {
            }
          }
         }
    
         
         $http(reqs).then(function(datasreg){
          console.log(datasreg.data.response.data);
          $scope.itemreg = [];
     
          angular.forEach(datasreg.data.response.data, function(value, key) {
    
            if(value.admin_email == $scope.sebaran.account.email){
            console.log("punya sales");
            $scope.itemreg.push(value);
          };
    
           
          });
          $scope.totalCount = datasreg.count;
          console.log($scope.itemreg);
          console.log("itemreg");
        });
      },
      two: function(){
        $scope.step.id++;
      },
      three: function(){
        $scope.step.id++;
      },
      four: function(){
        $scope.step.id++;
        
      },
      next: function(){
        $scope.step.id++;
      },
      prev: function(){
        $scope.step.id--;
      },
      send: function(){
     //   var model = $scope.model = {};
        console.log($scope.sebaran.account.fullname);
        var req = {
          method: 'POST',
          url: API_BASE_URL,
          headers: {
            'Content-Type': 'application/json',
            'token'       : 'development'
        
          },
          data: {
            "to": [],
            "action": "bubo.register",
            "params": {
                          "kota":$scope.kota,
                          "nama":$scope.nama,
                          "email":$scope.email,
                          "alamat":$scope.alamat,
                          "latlong":$scope.latlong,
                          "no_telp":$scope.no_telp,
                          "kode_pos":$scope.kodepos,
                          "logo_url":$scope.sebaran.media,
                          "merchant": "bubo",
                          "provinsi":$scope.provinsi,
                          "kecamatan":$scope.kecamatan,
                          "kelurahan":$scope.kelurahan,
                          "link_mode": "code",
                          "admin_email":$scope.sebaran.account.email,
                          "penanggung_jawab": $scope.sebaran.account.fullname,
            }
          }
         }
      
         $http(req).then(function(datas){
          console.log(datas + 'list hasil');
          $scope.step.id = 2;
        });

    

        $scope.step.next();

        


        // $scope.post('/submission', $scope.sebaran, function(resp){
        //   if(resp.status !== true){
        //     $scope.error = resp.message;
        //   }
        // });
      },
      done: function(){
        $scope.register = false;
      },
      upload: function(){
        cloudinary.openUploadWidget({ 
          cloud_name: 'dwiz5w6mk', 
          upload_preset: 'zx3qmvaz'
        }, function(error, result) { 
          if(error === null) {
            var img = document.getElementById("media");
            img.style.backgroundImage = "url("+result[0].url+")";
            $scope.sebaran.media = result[0].url;
            console.log($scope.sebaran);
            $scope.$apply();
          } 
        });
      }
    }
  })

  function onSuccess(googleUser) {
    document.getElementById("id").innerText = googleUser.getBasicProfile().getId();
    document.getElementById("name").innerText = googleUser.getBasicProfile().getName();
    document.getElementById("email").innerText = googleUser.getBasicProfile().getEmail();
    document.getElementById("google-signin").style.display = "none";
    var hidden = document.querySelectorAll('.hide');
    for(i=0;i<hidden.length;i++){
      hidden[i].className = 'show'
    }
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.getElementById('google-signin').remove()
    });
    
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('gsign', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

  
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -6.2349359, lng: 106.7529515},
      zoom: 13
    });

    map.addListener('dragend', function() {
      window.setTimeout(function() {
        var scope = angular.element(document.body).scope();
        scope.$apply(function () {
          scope.mapUpdate(map.getCenter().toUrlValue(12));
        });
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'location': map.getCenter()}, function(results, status) {
          if (status == 'OK') {
            scope.$apply(function () {
              scope.geoUpdate(results[0] || "");
            });
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
      }, 1000);
    });
  }
