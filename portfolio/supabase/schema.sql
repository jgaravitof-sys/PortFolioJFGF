create table if not exists site_stats (
  id int primary key default 1 check (id = 1),
  visits bigint not null default 0
);
insert into site_stats (id) values (1) on conflict do nothing;
alter table site_stats enable row level security; -- sin policies: anon no accede a la tabla directamente

create or replace function increment_visit_count() returns bigint
language sql security definer set search_path = public as
$$ update site_stats set visits = visits + 1 where id = 1 returning visits $$;

create or replace function get_visit_count() returns bigint
language sql security definer set search_path = public as
$$ select visits from site_stats where id = 1 $$;

grant execute on function increment_visit_count(), get_visit_count() to anon;
