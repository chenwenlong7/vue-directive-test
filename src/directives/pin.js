const pin = {
  mounted(el, binding) {
    var pined = binding.value;
    var position = binding.modifiers;
    var args = binding.arg;
    if(pined) {
      el.style.position = 'fixed';
      if(args === 'warning') {
        el.style.backgroundColor = 'pink';
      }
      for(var key in position) {
        if (position[key]) {
          el.style[key] = '10px';
        }
      }
    }else {
      el.style.position = 'static';
      el.style.backgroundColor = '';
    }
  }
}

export default pin