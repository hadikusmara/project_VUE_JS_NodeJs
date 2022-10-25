<template>
  
 
  <div> {{ namabelakan }} {{ namadepan }}  </diV>
</template>

<script>
export default{
name:"profile",
data: function(){
  return{
    namadepan   : 'juragan',
    namabelakan : 'kami'
  }
},
components : {}
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
