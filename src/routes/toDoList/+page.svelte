<script>
    export let data;

    // Extract documents array from the data
    // @ts-ignore
    const { documents } = data.todos;

    // Assuming documents is an array
    let todos = documents || [];

</script>

<div class = "flex">
    <details class="dropdown filterButton dropdown-hover">
        <summary class="m-1 btn">Filter By</summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Due Date</a></li>
          <li><a>Type</a></li>
        </ul>
      </details>
      <div class = "header">
        Current Todo Items
    </div>
    </div>
    
      <div class="flex flex-col w-full">
        <div class="divider"></div> 
      </div>
    
    
    {#each todos as todo}
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 displayCards">
        <div class="collapse-title text-xl font-medium">
          Title: {todo.title} &nbsp;
          Type: {todo.type} &nbsp; 
          Due Date: {todo.dueDate} &nbsp; 
        </div>
        <div class="collapse-content"> 
          <p>Notes: {todo.notes}</p>
        </div>
      </div>
    {/each}
    
    
    <style>
        .filterButton {
            margin-top: 10px;
            margin-left: 30px;
        }
        .displayCards {
            margin-bottom: 10px;
        }
        .header {
            margin-top: 10px;
            margin-bottom: 10px;
            color: black;
            font-size: 2em;
            font-family: 'Roboto', sans-serif;;
            font-weight: 'bold';
            margin-left: 450px;
        }
    
    </style>