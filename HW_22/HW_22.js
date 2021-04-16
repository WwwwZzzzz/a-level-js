// 01

function launchAll(launchMissile) {
    for(let i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(i);
      }, i * 1000);
    }
  }

  // 02

  const vm = function(string) {
    var str = string;
    const obj = {};

    obj.major = function() {
        str += ' major';
        return obj;
    };
    
    obj.minor = function() {
        str += ' minor';
        return obj;
    }
    
    obj.patch = function() {
        str += ' patch';
        return obj;
    }

    obj.release = function() {
        return str;
        }

    return obj;
  };


  var someClosure = function (string)
{
    var str = string;
    var me = {currentValue:string,
              patch: function()
              {
                  me.currentValue = str += ' patch ';
                  return me;
              },
              release: function()
              {
                  return str;
              },
      };
      return me;
}