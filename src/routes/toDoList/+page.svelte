<script>
    export let data;

    // Extract documents array from the data
    // @ts-ignore
    const { documents } = data.todos;

    // Assuming documents is an array
    let todos = documents || [];

    let myModal;
    let todo;
    /**
   * @type {{ title: any; type: any; date: any; time: any; duration: any; notes: any; }}
   */
    let currentTodo;

  function showModal(todo) {
    currentTodo = todo;
    myModal.showModal();
  }
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
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 displayCards">
      <input type = "checkbox">
        <div class="collapse-title text-xl font-medium">
          Title: {todo.title} &nbsp;
          Type: {todo.type} &nbsp; 
          Due Date: {todo.dueDate} &nbsp; 
        </div>
        <div class="collapse-content"> 
          <p>Notes: {todo.notes}</p>
          <div class = "flex mt-2">
            <button class="btn btn-primary btn-sm" on:click={() => showModal(todo)}>Modify</button>
            <dialog bind:this={myModal} id="my_modal_5" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Modify Todo Item</h3>
                  <p class="py-4">Modify the information of the todo below.</p>
                  {#if currentTodo}
                  <form method="POST" action="?/update">
                    <input name = "id" type = "hidden" hidden value = {currentTodo._id}>
                    <div class="form-control overflow-x-auto">
                        <table class="table">
                          <tbody>
                            <tr class="bg-base-200">
                              <th>1</th>
                              <td>Title</td>
                              <td><input type="text" name="title" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" value={currentTodo.title}/></td>
                            </tr>
                            <tr>
                              <th>2</th>
                              <td>Type</td>
                              <td><select class="select select-bordered select-sm w-full max-w-xs" name="type" value={currentTodo.type}>
                                <option disabled selected>Select</option>
                                <option>Task</option>
                                <option>Event</option>
                                <option>Study</option>
                              </select></td>
                            </tr>
                            <tr>
                              <th>3</th>
                              <td>Date (MM/DD/YYYY)</td>
                              <td><input type="text" name="date" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" value={currentTodo.date}/></td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Notes</td>
                                <td>
                                    <textarea class="textarea textarea-bordered" name="notes" placeholder="Bio" value={currentTodo.notes}></textarea>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
              <div class="form-contorl modal-action">
            
              <button class="btn">Update</button>
               
            </div>
          </form>
          {/if}
          </div>
          </dialog>
          <form method = "POST" action = "?/delete">
            <input name = "id" type = "hidden" hidden value = {todo._id}>
            <button class = "btn btn-error text-white btn-sm ml-2">Delete</button>
          </form>
        </div>
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