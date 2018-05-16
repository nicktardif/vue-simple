<template>
  <div>
    <h1>{{ msg }}</h1>
    <butte-image v-for="butte in buttesList" :link="butte.link" :name="butte.name" :key="butte.link"></butte-image>
  </div>
</template>

<script>
import ButteImage from '@/components/butte-image'

export default {
  name: 'ButtesPage',
  data () {
    return {
      msg: 'Look at these Buttes',
      buttesList: [
        {
          'link': 'http://www.americansouthwest.net/utah/photographs700/mvbutte.jpg',
          'name': 'Utah Butte'
        },
        {
          'link': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Monument_Valley_Merrick_Butte.jpg/1280px-Monument_Valley_Merrick_Butte.jpg?1526429060855',
          'name': 'Monument Valley Butte'
        },
        {
          'link': 'https://media.deseretdigital.com/file/5e83420365?crop=top:0|left:0|width:940|height:500|gravity:Center&quality=55&interlace=none&resize=width:940&order=resize,crop&c=14&a=8e1c7dfe',
          'name': 'Smooth Butte'
        }
      ]
    }
  },
  methods: {
  },
  components: {
    ButteImage
  }
}
</script>
