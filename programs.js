<script>
    let arr = ["FirstOne", "SecondTwo", "ThirdThree"];
    let length = 0;
    let longest;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > length) {
            length = arr[i].length;
            longest = arr[i];
        }
    }
    console.log(longest);
    
</script>