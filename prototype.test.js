describe('Protype', () => {
  it('Function constructor', () => {
    function User(name) {
      return {
        name,
        sayHello: function () {
          return `Hello, ${this.name}`
        }
      }
    }
    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  //done

  it('Prototype', () => {
    function User(name) {
      this.name = name;
    }

    User.prototype.sayHello = function () {
      return `Hello, ${this.name}`
    };

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  //done

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    // TODO: implement
    class ArticleList {
      constructor() {
        this.list = [];
      }
      add(art){
        return this.list.push(art)
      }
      articleCount() {
        return this.list.length
    }
    }

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    list2.add("asdasd");
    expect(list1.list.length).toBe(1);
    expect(list2.articleCount()).toBe(2)
  });

  //done

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement
   class Component {
     constructor(object) {
        this.data = object.data
     }

     render() {
       return ""
     }

     getData() {
       return this.data
     }

     setData(object) {
       Object.assign(this.data, object);
     }
   }


    /*
       UserComponent should extends Component
       override render method
       add 2 following methods:
       login - set data.name
       logout - set data.name undefined
     */


    // TODO: implement
    class UserComponent extends Component {
     render() {
       if (this.data.name === undefined) this.data.name = "guest";
       return `${this.data.msg}, ${this.data.name}!`
     }
     login(name) {
      this.data.name = name;
     }
     logout() {
       this.data.name = undefined;
     }
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  //done

  it('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test

    // TODO: implement
    function extend(Child, Parent) {
      const extendItem = function() {};
      extendItem().prototype = Parent.prototype;
      Child.prototype = new extendItem();
      Child.prototype.constructor = Child;
      Child.superclass = Parent.prototype;
    }

    // TODO: implement
    function Component(obj) {
      this.data = obj.data;
    }

    Component.prototype.render = () => "";
    Component.prototype.getData = () => this.data;
    Component.prototype.setData = (obj) => {Object.assign(this.data,obj)};

    // TODO: implement
    // NOTE: for inheritance should be used extend method
    function UserComponent(obj) {
      this.data = obj.data;
    }

    UserComponent.prototype.render = () => {
      if (this.data.name === undefined) this.data.name = "guest";
      return `${this.data.msg}, ${this.data.name}`;
    };
    UserComponent.prototype.login = (name) => this.data.name = name;
    UserComponent.prototype.logout = () =>  this.data.name = undefined;

    extend(UserComponent, Component);

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });



    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    // TODO implement Component and UserComponent from previous tasks using Class declaration
    class Component {
      constructor(object) {
        this.data = object.data
      }

      render() {
        return ""
      }

      getData() {
        return this.data
      }

      setData(object) {
        Object.assign(this.data, object);
      }
    }

    class UserComponent extends Component {
      render() {
        if (this.data.name === undefined) this.data.name = "guest";
        return `${this.data.msg}, ${this.data.name}!`
      }
      login(name) {
        this.data.name = name;
      }
      logout() {
        this.data.name = undefined;
      }
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Bob',
        msg: 'Hello'
      }
    });


    // TODO: write own test, see previous task as example
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    expect(userComponent.render()).toBe('Hello, Bob!')
  });

  //done

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings);
    helloTom.name = "Tom";
    let greetingsBob = Object.create(greetings);
    greetingsBob.name = "Bob";
    greetingsBob.msg = "Greetings";

    expect(helloTom.greetings()).toBe('Hello, Tom!');
    expect(greetingsBob.greetings()).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});
