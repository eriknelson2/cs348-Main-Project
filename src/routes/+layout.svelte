<script>
    import "../app.css";
  </script>
  
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <div class="dropdown">
      <label tabindex="0" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-1">
        <li><a href="/toDoList">To-Do List</a></li> 
        <li><a href="/addSession">Create</a></li>
      </ul>
      </div>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">Home</a>
    </div>
    <div class="flex-none">
    </div>
  </div>

  <slot />