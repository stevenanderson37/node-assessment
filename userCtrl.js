var users = require('./users');
var server = require('./server');

module.exports = {
  readAll: function() {
    return users.find();
  },

  findUserById: function(userId) {
    var user = users.findOne('id', userId);

    if (!user) {
      return null;
    } else {
      return user;
    }
  },

  getAdmins: function() {
    var admins = users.find('type', 'admin');

    if (admins <= 0) {
      return null;
    } else {
      return admins;
    }
  },

  getNonAdmins: function() {
    var nonAdmins = users.find('type', 'user');

    if (nonAdmins <= 0) {
      return null;
    } else {
      return nonAdmins;
    }
  },

  getUsersByFavorite: function(fav) {
    var allUsers = users.find();
    var filteredByFav = allUsers.filter(function (user) {
      for(var i = 0; i < user.favorites.length; i++) {
        if (user.favorites[i].toLowerCase() === fav.toLowerCase()) {
          return user.favorites;
        }
      }
    });

    if (filteredByFav <= 0) {
      return null;
    } else {
      return filteredByFav;
    }
  },

  getUsersByAgeLimit: function(age) {
    var allUsers = users.find();
    var filteredByAge = allUsers.filter(function (user) {
      return user.age < age;
    });

    if (filteredByAge <= 0) {
      return null;
    } else {
      return filteredByAge;
    }
  },

  findUserByQuery: function(key, value) {
    var queriedUsers;

    if (key === 'last_name' || key === 'Email') {
      queriedUsers = users.find(key, value);
      if (queriedUsers <= 0) {
        return null;
      } else {
        return queriedUsers;
      }
    } else {
      queriedUsers = users.find(key, value);
      if (queriedUsers <= 0) {
        return null;
      } else {
        return queriedUsers;
      }
    }
  },

  // findUserByQuery: function(key, value) {
  //   var allUsers = users.find();
  //   var queriedUsers;
  //
  //   if (key === 'lastname') {
  //     queriedUsers = allUsers.filter(function (user) {
  //       return user.last_name.toLowerCase() === value.toLowerCase();
  //     });
  //   } else if (key === 'Email') {
  //     queriedUsers = allUsers.filter(function (user) {
  //       return user.email.toLowerCase() == value;
  //     });
  //   } else if (key === 'state') {
  //     queriedUsers = allUsers.filter(function (user) {
  //       return user.state.toLowerCase() === value.toLowerCase();
  //     });
  //   } else if (key === 'type') {
  //     queriedUsers = allUsers.filter(function (user) {
  //       return user.type.toLowerCase() === value.toLowerCase();
  //     });
  //   } else {
  //     return null;
  //   }
  //
  //   if (queriedUsers <= 0) {
  //     return null;
  //   } else {
  //     return queriedUsers;
  //   }
  // },

  createUser: function(user) {
    var addedUser = users.add(user);

    if (!addedUser) {
      return null;
    } else {
      return addedUser;
    }
  },

  updateUser: function(userId, object) {
    users.update('id', userId, object);
    var user = users.findOne('id', userId);

    if (!user) {
      return null;
    } else {
      return user;
    }
  },

  removeUser: function(userId) {
    users.remove('id', userId);
    var deletedUser = users.findOne('id', userId);

    if (!deletedUser) {
      return null;
    } else {
      return deletedUser;
    }
  }
}
