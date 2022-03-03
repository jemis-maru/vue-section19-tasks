import { ref, computed, watch } from 'vue';

export default function useSearch(userArr, searchProp){
    let enteredSearchTerm = ref('');
    let activeSearchTerm = ref('');

    const availableUsers = computed(function(){
      let users = [];
      if (activeSearchTerm.value) {
        users = userArr.value.filter((usr) =>
          usr[searchProp].includes(activeSearchTerm.value)
        );
      } else if (userArr.value) {
        users = userArr.value;
      }
      return users;
    });

    watch(enteredSearchTerm, function(val){
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    return[
      enteredSearchTerm,
      activeSearchTerm,
      availableUsers,
      updateSearch,
    ];
}