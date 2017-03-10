angular.module('myApp', ['ionic'])

  .controller('PostsCtrl', function(Post) {
    let that = this;

    Post.all().then(function(data) {
      that.posts = data;
    });
  })

  .controller('PostCtrl', function($stateParams, Post) {
    this.isShow = true;

    Post.get(parseInt($stateParams.id)).then((post) => {
      this.post = post;
    });
  })

  .controller('UsersCtrl', function($stateParams, Post) {
    Post.get(parseInt($stateParams.id)).then((user) => {
      this.user = user.user;
    });
  })

  .directive('postArticle', function() {
    return {
      scope: {
        post: '=',
        isShow: '='
      },
      templateUrl: 'templates/post-article.html'
    }
  })

  .factory('Post', function($http) {
    const RANDOM_USER_URL = 'http://api.randomuser.me/';
    let posts = [];

    function buildPost(id, post) {
      return {
        id: id,
        sharedImg: post.picture.large,
        shortDescription: 'Sit tempor est occaecat id adipisicing nulla laboris esse do cupidatat adipisicing officia aliqua dolor...',
        largeDescription: 'Eu elit quis fugiat mollit non esse ullamco labore est enim culpa elit. Ut minim id magna incididunt eiusmod dolore ut quis sit occaecat excepteur cupidatat laborum occaecat ipsum ullamco. Culpa sint non quis duis ex magna duis irure velit pariatur. Reprehenderit aute irure consequat quis exercitation duis eu laborum labore dolore labore eiusmod ea incididunt officia. Incididunt id dolore minim Lorem cupidatat voluptate dolor occaecat incididunt sint nisi pariatur ea. Lorem minim culpa Lorem culpa veniam do reprehenderit reprehenderit ad.',
        user: {
          id: id,
          profileImg: post.picture.thumbnail,
          fullname: `${post.name.first} ${post.name.last}`,
          aboutMe: 'Culpa esse culpa cillum sint laborum sint anim et in dolore eu incididunt dolore fugiat officia. Nostrud sit nostrud Lorem ipsum sunt nisi reprehenderit in nisi excepteur occaecat tempor non ut proident sit. Tempor cupidatat cillum velit excepteur laborum dolore veniam veniam. Veniam irure pariatur Lorem reprehenderit irure aliquip mollit ad ex Lorem nisi eiusmod ex nulla. Nisi adipisicing dolore adipisicing incididunt eiusmod mollit ullamco amet nulla aliqua id laborum anim culpa deserunt dolor. Id sit eiusmod cillum sunt irure tempor consectetur eiusmod nulla ullamco.',
          phone: post.cell
        }
      };
    }

    return {
      all: () => {
        return $http({
          url: RANDOM_USER_URL,
          method: 'GET',
          params: { results: 50 }
        })
          .then((data) => {
            let results = data.data.results;

            for (let i = 0, l = results.length; i < l; i++) {
              posts.push(buildPost(i + 1, results[i]));
            }

            return posts;
          });
      },

      remove: function(post) {
        posts.splice(posts.indexOf(post), 1);
      },

      get: function(postId) {
        if (posts.length > 0) {
          return new Promise(function(resolve) {
            for (let x = 0, l = posts.length; x < l; x++) {

              if (posts[x].id === postId) {
                resolve(posts[x]);
              }
            }
          });
        } else {
          return $http.get(RANDOM_USER_URL)
            .then(function(data) {
              return buildPost(postId, data.data.results[0])
            });
        }
      }
    };
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'templates/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'Posts'
      })
      .state('post', {
        url: '/posts/:id',
        templateUrl: 'templates/post.html',
        controller: 'PostCtrl',
        controllerAs: 'Post'
      })
      .state('user', {
        url: '/users/:id',
        templateUrl: 'templates/user.html',
        controller: 'UsersCtrl',
        controllerAs: 'Users'
      });

    $urlRouterProvider.otherwise('/posts');
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
